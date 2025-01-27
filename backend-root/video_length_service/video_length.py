from fastapi import FastAPI, UploadFile
from moviepy.editor import VideoFileClip # this function currently only uses this



app = FastAPI()

@app.post("/video_length")
async def video_length(file: UploadFile):

    print("Video Length worked")
    # Shared directory inside the container
    shared_data_dir = "/shared_data"
    file_path = f"{shared_data_dir}/{file.filename}"
    
    with open(file_path, "wb") as f:
        f.write(file.file.read())

    video = VideoFileClip(file_path)
    duration = video.duration
    ideal_length = 45

    length_boolean = 1 if duration <= ideal_length else 0
    return {"length_seconds": duration, "length_boolean": length_boolean}
