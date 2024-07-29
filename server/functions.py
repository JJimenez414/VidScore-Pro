from moviepy.editor import VideoFileClip
import librosa
import numpy as np
import os
from werkzeug.utils import secure_filename
from moviepy.editor import VideoFileClip
import cv2
import requests
import moviepy.editor as mp
from scipy.signal import butter, lfilter, iirnotch


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

    if mean_rms_db == None:
        return 0, len(long_dips_regions), len(long_peaks_regions), dip_peak_percentage
    
    return mean_rms_db, len(long_dips_regions), len(long_peaks_regions), dip_peak_percentage

# Function will locate video file and get duration of clip, and test to see if the duration meets the ideal length. Returns string
def video_length(video):

    video = VideoFileClip(video)
    duration = video.duration

    minutes, seconds = divmod(duration, 60)

    seconds = seconds + (minutes * 60)

    ideal_length = 45


    # FUTURE IMPLEMENTATION:
    # Return a percentage value that changes based off how far it is from ideal length (Total percentage points are 25%)
    
    if seconds > ideal_length:
        return seconds, 0
        # f"The video is too long. {int(seconds)} seconds is {int(seconds - ideal_length)} seconds much longer than the ideal range"
    else:
        return seconds, 1
        # f"The video is a good length. At {int(seconds)} seconds, the video is {int(ideal_length - seconds)} seconds below ideal range."

# Check for higher resolutions instead of 1920 & 1080
def video_resolution(video):

    path = video
    vid = cv2.VideoCapture(path)

    height = vid.get(cv2.CAP_PROP_FRAME_HEIGHT)
    width = vid.get(cv2.CAP_PROP_FRAME_WIDTH)

    if height != 1920 and width != 1080:
        return height, width, 0
        # output = f"The video quality is below recommended: {int(height)} x {int(width)} pixels."
    else:
        return height, width, 1
        # output = f"The video quality is good: {int(height)} x {int(width)} pixels."


def black_bars(video) -> bool:
    path = video
    vid = cv2.VideoCapture(path)

    height = vid.get(cv2.CAP_PROP_FRAME_HEIGHT)
    width = vid.get(cv2.CAP_PROP_FRAME_WIDTH)

    if width > height:
        return 1 # True: There will be black bars
    else:
        return 0 # False: There will not be black bars
    

'''

def butter_bandpass(lowcut, highcut, fs, order=5):
    nyquist = 0.5 * fs
    low = lowcut / nyquist
    high = highcut / nyquist
    b, a = butter(order, [low, high], btype='band')
    return b, a

def bandpass_filter(data, lowcut, highcut, fs, order=5):
    b, a = butter_bandpass(lowcut, highcut, fs, order=order)
    y = lfilter(b, a, data)
    return y

def notch_filter(data, freq, fs, quality=30):
    nyquist = 0.5 * fs
    freq = freq / nyquist
    b, a = iirnotch(freq, quality)
    y = lfilter(b, a, data)
    return y

def calculate_snr(signal, noise):
    signal_power = np.mean(signal ** 2)
    noise_power = np.mean(noise ** 2)
    snr = 10 * np.log10(signal_power / noise_power)
    return snr

def analyze_noise(video_path, noise_threshold=20, lowcut=300, highcut=3400, fs=44100):
    # Load video file
    video = mp.VideoFileClip(video_path)
    
    # Extract audio
    audio = video.audio.to_soundarray(fps=fs)
    
    # Convert stereo to mono by averaging channels if necessary
    if audio.ndim == 2:
        audio = np.mean(audio, axis=1)
    
    # Apply bandpass filter to isolate speech frequencies
    filtered_audio = bandpass_filter(audio, lowcut, highcut, fs)
    
    # Estimate noise by subtracting filtered signal from the original signal
    noise = audio - filtered_audio
    
    # Calculate SNR
    snr = calculate_snr(filtered_audio, noise)
    
    # Detect specific types of noise
    # Hiss (high-frequency noise)
    high_freq_noise = bandpass_filter(noise, 3000, fs/2, fs)
    hiss_power = np.mean(high_freq_noise ** 2)
    
    # Hum (low-frequency noise)
    hum_noise = notch_filter(noise, 50, fs)  # Assuming 50Hz hum
    hum_power = np.mean(hum_noise ** 2)
    
    # Clicks and pops (sudden sharp noises)
    transient_noise = bandpass_filter(noise, 2000, 8000, fs)
    transient_power = np.mean(transient_noise ** 2)
    
    noise_info = {
        "snr": snr,
        "hiss_power": hiss_power,
        "hum_power": hum_power,
        "transient_power": transient_power
    }
    
    # Determine if audio is noisy based on the threshold
    is_noisy = snr < noise_threshold or hiss_power > 1e-5 or hum_power > 1e-5 or transient_power > 1e-5
    
    return is_noisy, noise_info


# Example usage
video_path = "path_to_your_video_file.mp4"
is_noisy, noise_info = analyze_noise(video_path)
if is_noisy:
    print("The audio has an outstanding amount of noise.")
    print("Noise details:", noise_info)
else:
    print("The audio is not noisy.")

'''



# This function needs fixing: (Approach isn't giving accurate info) - OUT OF SERVICE
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