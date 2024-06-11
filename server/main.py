from flask import Flask, render_template
from moviepy.editor import VideoFileClip

app = Flask(__name__)

@app.route('/')
def index():
    return video_length()



def video_length():

    video = VideoFileClip('./videos/video1.mp4')
    duration = video.duration

    minutes, seconds = divmod(duration, 60)

    if seconds > 35:
        return f"The video is too long. {int(seconds)} seconds is {int(seconds - 35)} seconds much longer than the ideal range"
    else:
        return f"The video is a good length. At {int(seconds)} seconds, the video is {int(35 - seconds)} seconds below ideal range."



if __name__ == '__main__':
    app.run(debug=True, port="8080")
    