from fastapi import FastAPI, UploadFile
from moviepy.editor import VideoFileClip
import librosa
import math

app = FastAPI()

@app.post("/audio_analysis")
async def audio_analysis(file: UploadFile):
    # Shared directory inside the container
    shared_data_dir = "/shared_data"
    file_path = f"{shared_data_dir}/{file.filename}"
    
    with open(file_path, "wb") as f:
        f.write(file.file.read())

    # Convert MP4 to MP3
    audio_path = "./temp/audio.mp3"
    video_clip = VideoFileClip(file_path)
    audio_clip = video_clip.audio
    audio_clip.write_audiofile(audio_path)
    audio_clip.close()

    # Analyze audio
    y, sr = librosa.load(audio_path, sr=None)
    rms = librosa.feature.rms(y=y)[0]
    mean_rms_db = 20 * math.log10(np.mean(rms)) if np.mean(rms) > 0 else 0

    return {"mean": mean_rms_db, "dips": 0, "peaks": 0, "audio_percentage": 25}
