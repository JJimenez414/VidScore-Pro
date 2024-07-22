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

# This will get video from frontend and do analyses on it
# This will get video from frontend and do analyses on it
@app.route('/postVideo', methods=['POST'])
def postVideo():
    global mean, dips, peaks, percentage, audio_percentage, length_percent, resolution_percent
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

    vFile.save(os.path.join(app.config['UPLOAD_FOLDER'], filename)) # video.mp4

    
    if video_length(f"./uploads/{filename}"):
        length_percent = 25
    else:
        length_percent = 0
    

    if video_resolution(f"./uploads/{filename}"):
        resolution_percent = 25
    else:
        resolution_percent = 0
        

    convert_mp4_to_mp3(f'./uploads/{filename}', './downloads/audio.mp3')
    mean, dips, peaks, percentage = detect_long_dips_peaks('./downloads/audio.mp3')

    # this function needs to be updated | volume = avg_audio_level('./downloads/audio.mp3') 

    # this function needs to be updated | volume = avg_audio_level('./downloads/audio.mp3') 

    #Check if percentage is higher than recommended
    audio_percentage = percentage * (25/100)
    # print(audio_percentage)
    if audio_percentage > 2: 
        audio_percentage = 25 - int(audio_percentage)
    else:
        audio_percentage = 25
    
    return jsonify({'nameRequest': "postVideo", 'filename': filename}) # Verify if this is correct



# This will send data back to frontend
@app.route('/sendData', methods=['GET'])
def sendData():
    response = {'mean': int(mean),
                'dips': dips,
                'peaks': peaks,
                'audio_percentage': audio_percentage,
                'length_percentage': length_percent,
                'resolution_percentage': resolution_percent}
    
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True, port="8080")