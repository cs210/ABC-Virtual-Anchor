'''
This code was largely from this tutorial
https://www.machinelearningmindset.com/extracting-audio-from-video-using-ffmpeg/

Note that we need NVENC support for faster extraction
Assumes we have the ffmpeg binaries installed
'''

import subprocess
import os
import sys

class AudioExtractor:
    def __init__(self, video_list_path):
        #absolute/path/to/videos.txt
        self.video_list_path = video_list_path

    def seperate_audio(self):
        # Read the text file
        with open(self.video_list_path) as f:
            content = f.readlines()
        #remove white space
        files_list = [x.strip() for x in content]

        # Extract audio from video.
        for _, file_path_input in enumerate(files_list, start=1):
            # Get the file name withoutextension
            file_name = os.path.basename(file_path_input)
            raw_file_name = os.path.basename(file_name).split('.')[0]
            file_dir = os.path.dirname(file_path_input)
            file_path_output = file_dir + '/' + raw_file_name + '.wav'
            print('processing file: %s' % file_path_input)
            subprocess.call(
                ['ffmpeg', '-i', file_path_input, '-codec:a', 'pcm_s16le', '-ac', '1', file_path_output])
            print('file %s saved' % file_path_output)