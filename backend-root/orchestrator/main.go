package main

import (
	"bytes"
	"encoding/json"
	"io"
	"mime/multipart"
	"net/http"
	"os"
	"path/filepath"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"time"
)

var responseData gin.H // Global variable to store response data

func main() {
	router := gin.Default()

	// CORS configuration
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // Allow your frontend's origin
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	router.POST("/analyze", func(c *gin.Context) {
		// Retrieve the file from the request
		header, err := c.FormFile("video")
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to upload file"})
			return
		}

		sharedDataDir := "/shared_data" // Path inside the container
		filePath := filepath.Join(sharedDataDir, header.Filename) // Construct the file path
		err = c.SaveUploadedFile(header, filePath)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save file"})
			return
		}

		// Communicate with Python microservices
		lengthResponse, err := callPythonService("http://video_length_service:8003/video_length", filePath)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to communicate with video_length microservice", "details": err.Error()})
		
		}

		resolutionResponse, err := callPythonService("http://video_resolution_service:8004/video_resolution", filePath)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to communicate with video_resolution microservice", "details": err.Error()})
			
		}

		aspectResponse, err := callPythonService("http://aspect_ratio_service:8001/aspect_ratio", filePath)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to communicate with aspect_ratio microservice", "details": err.Error()})
			
		}

		// audioResponse, err := callPythonService("http://audio_analysis_service:8002/audio_analysis", filePath)
		// if err != nil {
		// 	c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to communicate with audio_analysis microservice", "details": err.Error()})
			
		// }

		// Combine responses and send them back to the frontend
		c.JSON(http.StatusOK, gin.H{
			"length":      lengthResponse,
			"resolution":  resolutionResponse,
			"aspect":      aspectResponse,
			// "audio":       audioResponse,
		})
	})

	// SendData endpoint
	router.GET("/sendData", func(c *gin.Context) {
		if responseData == nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "No data available"})
			return
		}
		c.JSON(http.StatusOK, responseData)
	})

	router.Run(":8080")
}

func callPythonService(url, filePath string) (map[string]interface{}, error) {
	// Open the file for reading
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	// Create a multipart/form-data request
	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)
	part, err := writer.CreateFormFile("file", filepath.Base(filePath))
	if err != nil {
		return nil, err
	}
	_, err = io.Copy(part, file)
	if err != nil {
		return nil, err
	}
	writer.Close()

	// Make the HTTP request to the Python microservice
	req, err := http.NewRequest("POST", url, body)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Content-Type", writer.FormDataContentType())

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	// Parse the response into a map
	var result map[string]interface{}
	err = json.NewDecoder(resp.Body).Decode(&result)
	if err != nil {
		return nil, err
	}

	return result, nil
}
