from flask import Flask, request, jsonify
from flask_cors import CORS
import os

from functions import *


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
    postID = 1

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

    convert_mp4_to_mp3(f'./uploads/{filename}', './downloads/audio.mp3')
    mean, dips, peaks, percentage = detect_long_dips_peaks('./downloads/audio.mp3')
    volume = avg_audio_level('./downloads/audio.mp3')

    # Check if percentage is higher than recommended
    scaled_percentage = percentage * (25/100)
    if scaled_percentage < 2:
        # The audio is stable: return the full 25%
        print("Audio Stablizer Metric: 25/25")
        print(f"Volume: {int(volume)}db")

        # For testing: if you want to see the mean, dips, peaks, uncomment the following lines
        # print(f"Mean RMS: {mean:.2f}")
        # print(f"Number of Dips: {dips}")
        # print(f"Number of Peaks: {peaks}")
    else:

        print(f"Audio Stablizer Metric: {25 - int(scaled_percentage)}/25")
        print(f"Volume: {int(volume)}db")

        # For testing: if you want to see the mean, dips, peaks, uncomment the following lines
        print(f"Over {percentage:.2f}% of the video audio has a dip or peak")
        # print(f"Mean RMS: {mean:.2f}")
        # print(f"Number of Dips: {dips}")
        # print(f"Number of Peaks: {peaks}")

    return jsonify({'id': postID, 'filename': filename})



# def index():
#     return video_resolution()




if __name__ == '__main__':
    app.run(debug=True, port="8080")
    