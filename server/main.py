from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from moviepy.editor import VideoFileClip
import cv2
import requests


app = Flask(__name__)
cors = CORS(app, origins="*")

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/')

# Jose Fetch/Catch
@app.route('/getVideo')
def getVideo():
    response = {'message': 'bye!'}
    return response


@app.route('/postVideo', methods=['POST'])
def postVideo():

    # Check if the POST request has the file part
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    vFile = request.files['file']

    # If user does not select a file, the browser may also submit an empty part without a filename
    if vFile.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Use secure_filename to ensure the filename is safe
    filename = secure_filename(vFile.filename)
    
    # Save the file to the specified directory
    vFile.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    
    print(vFile)
    
    return jsonify({'nameRequest': "postVideo", 'filename': filename})

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
    width = vid.get(cv2.CAP_PROP_FRAME_WIDTH)

    if height < 1920 and width < 1080:
        output = f"The video quality is below recommended: {int(height)} x {int(width)} pixels."
    else:
        output = f"The video quality is good: {int(height)} x {int(width)} pixels."

    return output



if __name__ == '__main__':
    app.run(debug=True, port="8080")
    