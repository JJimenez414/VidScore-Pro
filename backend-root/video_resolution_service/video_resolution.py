from fastapi import FastAPI, UploadFile
import cv2 # only used this libary

app = FastAPI()

@app.post("/video_resolution")
async def video_resolution(file: UploadFile):
    # Shared directory inside the container
    shared_data_dir = "/shared_data"
    file_path = f"{shared_data_dir}/{file.filename}"
    
    with open(file_path, "wb") as f:
        f.write(file.file.read())

    vid = cv2.VideoCapture(file_path)
    height = vid.get(cv2.CAP_PROP_FRAME_HEIGHT)
    width = vid.get(cv2.CAP_PROP_FRAME_WIDTH)

    resolution_boolean = 1 if height == 1920 and width == 1080 else 0
    return {"height": height, "width": width, "resolution_boolean": resolution_boolean}
