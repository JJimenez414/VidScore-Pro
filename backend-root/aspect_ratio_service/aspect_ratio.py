from fastapi import FastAPI, UploadFile
import cv2 # only uses this libary

app = FastAPI()

@app.post("/aspect_ratio")
async def aspect_ratio(file: UploadFile):

    # Shared directory inside the container
    shared_data_dir = "/shared_data"
    file_path = f"{shared_data_dir}/{file.filename}"
    
    with open(file_path, "wb") as f:
        f.write(file.file.read())

    vid = cv2.VideoCapture(file_path)
    height = vid.get(cv2.CAP_PROP_FRAME_HEIGHT)
    width = vid.get(cv2.CAP_PROP_FRAME_WIDTH)

    aspect_boolean = 1 if width > height else 0
    return {"aspect_boolean": aspect_boolean}

