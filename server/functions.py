from moviepy.editor import VideoFileClip
import librosa
import numpy as np
import os
from werkzeug.utils import secure_filename
from moviepy.editor import VideoFileClip
import cv2
import requests


# Used to convert uploaded video files into audio files to analyze
def convert_mp4_to_mp3(video_path, audio_path):
    
    video_clip = VideoFileClip(video_path)
    audio_clip = video_clip.audio

    audio_clip.write_audiofile(audio_path, codec='mp3')

    audio_clip.close()
    video_clip.close()

    # print(f"Converted {video_path} to {audio_path}")

# Returns # of dips and peaks including percentage
def detect_long_dips_peaks(audio_path, frame_size=2048, hop_length=512, dip_db_threshold=-5, peak_db_threshold=5, min_duration=2.0):
    # Load the audio file
    y, sr = librosa.load(audio_path, sr=None)
    
    # Calculate RMS energy for each frame
    rms = librosa.feature.rms(y=y, frame_length=frame_size, hop_length=hop_length)[0]
    
    # Normalize the RMS values
    rms_normalized = rms / np.max(rms)
    
    # Calculate the mean and standard deviation of the RMS values
    mean_rms = np.mean(rms_normalized)
    std_rms = np.std(rms_normalized)
    
    # Convert mean RMS to dB
    mean_rms_db = 20 * np.log10(mean_rms)
    
    # Convert dB thresholds to RMS ratio
    dip_threshold_value = mean_rms * 10 ** (dip_db_threshold / 20)
    peak_threshold_value = mean_rms * 10 ** (peak_db_threshold / 20)
    
    # Identify frames with dips and peaks
    dips = rms_normalized < dip_threshold_value
    peaks = rms_normalized > peak_threshold_value
    
    # Convert min_duration to number of frames
    min_frames = int(min_duration * sr / hop_length)
    
    # Function to count contiguous regions and accumulate frame indices
    def count_contiguous_regions(condition, min_frames):
        regions = []
        length = 0
        start_idx = 0
        for i, is_condition_met in enumerate(condition):
            if is_condition_met:
                if length == 0:
                    start_idx = i
                length += 1
                if length >= min_frames:
                    if length == min_frames:
                        regions.append((start_idx, i))
                    else:
                        regions[-1] = (start_idx, i)
            else:
                length = 0
        return regions

    # Get regions of long dips and peaks
    long_dips_regions = count_contiguous_regions(dips, min_frames)
    long_peaks_regions = count_contiguous_regions(peaks, min_frames)
    
    # Combine overlapping regions from dips and peaks
    all_regions = sorted(long_dips_regions + long_peaks_regions)
    merged_regions = []
    for start, end in all_regions:
        if merged_regions and merged_regions[-1][1] >= start - 1:
            merged_regions[-1] = (merged_regions[-1][0], max(merged_regions[-1][1], end))
        else:
            merged_regions.append((start, end))
    
    # Calculate the total duration of merged regions
    total_long_dip_peak_frames = sum(end - start + 1 for start, end in merged_regions)
    
    # Calculate the percentage of the video with long dips or peaks
    total_frames = len(rms)
    dip_peak_percentage = (total_long_dip_peak_frames / total_frames) * 100
    
    return mean_rms_db, len(long_dips_regions), len(long_peaks_regions), dip_peak_percentage

# Function will locate video file and get duration of clip, and test to see if the duration meets the ideal length. Returns string
def video_length(video) -> bool:

    video = VideoFileClip(video)
    duration = video.duration

    minutes, seconds = divmod(duration, 60)

    seconds = seconds + (minutes * 60)

    ideal_length = 45


    # FUTURE IMPLEMENTATION:
    # Return a percentage value that changes based off how far it is from ideal length (Total percentage points are 25%)
    
    if seconds > ideal_length:
        return False
        # f"The video is too long. {int(seconds)} seconds is {int(seconds - ideal_length)} seconds much longer than the ideal range"
    else:
        return True
        # f"The video is a good length. At {int(seconds)} seconds, the video is {int(ideal_length - seconds)} seconds below ideal range."


def video_resolution(video) -> bool:

    path = video
    vid = cv2.VideoCapture(path)

    height = vid.get(cv2.CAP_PROP_FRAME_HEIGHT)
    width = vid.get(cv2.CAP_PROP_FRAME_WIDTH)

    if height != 1920 and width != 1080:
        return False
        # output = f"The video quality is below recommended: {int(height)} x {int(width)} pixels."
    else:
        return True
        # output = f"The video quality is good: {int(height)} x {int(width)} pixels."


# This function needs fixing: (Approach isn't giving accurate info)
def avg_audio_level(audio_path):
    # Load the audio file
    y, sr = librosa.load(audio_path, sr=None)
    
    # Calculate RMS energy for the audio signal
    rms = librosa.feature.rms(y=y)[0]
    
    # Convert RMS energy to dB
    rms_db = librosa.amplitude_to_db(rms, ref=np.max)
    
    # Calculate the average dB level
    average_db = np.mean(rms_db)
    
    return average_db