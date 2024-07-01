from moviepy.editor import VideoFileClip
import librosa
import numpy as np

def convert_mp4_to_mp3(video_path, audio_path):
    
    video_clip = VideoFileClip(video_path)
    audio_clip = video_clip.audio

    audio_clip.write_audiofile(audio_path, codec='mp3')

    audio_clip.close()
    video_clip.close()

    # print(f"Converted {video_path} to {audio_path}")


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
    
    # Function to count contiguous regions
    def count_contiguous_regions(condition, min_frames):
        count = 0
        length = 0
        for is_condition_met in condition:
            if is_condition_met:
                length += 1
                if length >= min_frames:
                    count += 1
            else:
                length = 0
        return count

    # Count long dips and peaks
    long_dips_count = count_contiguous_regions(dips, min_frames)
    long_peaks_count = count_contiguous_regions(peaks, min_frames)
    
    # Print analysis results
    # print(f"Mean RMS: {mean_rms:.2f}")
    # print(f"Mean RMS in dB: {mean_rms_db:.2f} dB")
    # print(f"Standard Deviation of RMS: {std_rms:.2f}")
    # print(f"Dip Threshold: {dip_db_threshold} dB (below mean RMS)")
    # print(f"Peak Threshold: {peak_db_threshold} dB (above mean RMS)")
    # print(f"Number of Long Dips: {long_dips_count}")
    # print(f"Number of Long Peaks: {long_peaks_count}")
    
    return mean_rms_db, long_dips_count, long_peaks_count


# Get video path and convert it to audio using function
# video_path = 'C:\\Users\\bravo\\Desktop\\SummerInternship\\Easy-Social-Media\\server\\uploads\\Eleveator_Pitch.mp4'
# main_audio_path = 'C:\\Users\\bravo\\Desktop\\SummerInternship\\Easy-Social-Media\\server\\videos\\audio.mp3'


# Audio that's already been converted
audio_path1 = 'C:\\Users\\bravo\\Desktop\\SummerInternship\\Easy-Social-Media\\server\\videos\\KennyG_Test-v2.mp3'
audio_path2 = 'C:\\Users\\bravo\\Desktop\\SummerInternship\\Easy-Social-Media\\server\\videos\\ElevenLabs_2024-06-24T18_09_07_Daniel.mp3'
audio_path3 = 'C:\\Users\\bravo\\Desktop\\SummerInternship\\Easy-Social-Media\\server\\videos\\audio.mp3'
audio_path4 = 'C:\\Users\\bravo\\Desktop\\SummerInternship\\Easy-Social-Media\\server\\videos\\Dr_Audio.mp3'
audio_path5 = 'C:\\Users\\bravo\\Desktop\\SummerInternship\\Easy-Social-Media\\server\\videos\\entire_audio_test.mp3'
audio_path6 = 'C:\\Users\\bravo\\Desktop\\SummerInternship\\Easy-Social-Media\\server\\videos\\Kenny G - Songbird (Offiical Video).mp3'
audio_path7 = 'C:\\Users\\bravo\\Desktop\\SummerInternship\\Easy-Social-Media\\server\\videos\\Test_Peaks_dips.mp3'


# convert_mp4_to_mp3(video_path, main_audio_path)

# # Takes in an audio file and returns the mean, dips, and peaks
mean, dips, peaks = detect_long_dips_peaks(audio_path2)

if dips == 0 and peaks == 0:
    print("The audio is stable")

    # For testing: if you want to see the mean, dips, peaks, uncomment the following lines
    print(f"Mean RMS: {mean:.2f}")
    print(f"Number of Long Dips: {dips}")
    print(f"Number of Long Peaks: {peaks}")
else:

    # For testing: if you want to see the mean, dips, peaks, uncomment the following lines
    print("The audio is not stable")
    print(f"Mean RMS: {mean:.2f}")
    print(f"Number of Long Dips: {dips}")
    print(f"Number of Long Peaks: {peaks}")





