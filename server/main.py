from flask import Flask, render_template
from moviepy.editor import VideoFileClip
import cv2


app = Flask(__name__)

@app.route('/')
def index():
    return video_resolution()


# Function will locate video file and get duration of clip, and test to see if the duration meets the ideal length. Returns string
def video_length():

    video = VideoFileClip('./videos/video1.mp4')
    duration = video.duration

    minutes, seconds = divmod(duration, 60)

    seconds = seconds + (minutes * 60)

    ideal_length = 45
    if seconds > ideal_length:
        return f"The video is too long. {int(seconds)} seconds is {int(seconds - ideal_length)} seconds much longer than the ideal range"
    else:
        return f"The video is a good length. At {int(seconds)} seconds, the video is {int(ideal_length - seconds)} seconds below ideal range."

def video_resolution():

    path = './videos/video1.mp4'
    vid = cv2.VideoCapture(path)

    height = vid.get(cv2.CAP_PROP_FRAME_HEIGHT)
    width = vid.get(cv2.CAP_PROP_FRAME_WIDTH)

    if height < 1920 and width < 1080:
        output = f"The video quality is below recommended: {int(height)} x {int(width)} pixels."
    else:
        output = f"The video quality is good: {int(height)} x {int(width)} pixels."

    return output



if __name__ == '__main__':
    app.run(debug=True, port="8080")
    