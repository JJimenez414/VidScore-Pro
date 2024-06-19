from flask import Flask, request, jsonify
from flask_cors import CORS
from moviepy.editor import VideoFileClip
import cv2


app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route('/')

# Jose Fetch/Catch
@app.route('/Video')
def video():
    response = {'message': 'world'}
    return response

@app.route('/gVideo', methods=['POST'])
def gVideo():
    postID = 2
    vFile = request.json['videoFile']
    print(vFile)
    return {'id': postID}

# def index():
#     return video_resolution()


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
    width = vid.get(cv2.CAP_PROP_FRAME_HEIGHT)

    output = f"The resolution is {int(height)} x {int(width)} pixels."

    return output



if __name__ == '__main__':
    app.run(debug=True, port="8080")
    