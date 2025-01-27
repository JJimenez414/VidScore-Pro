# Use an official Golang image as the base
FROM golang:1.23.2

# Set the working directory in the container
WORKDIR /app

# Copy Go module files first to leverage Docker layer caching
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Command to build and run the application
CMD ["go", "run", "main.go"]
