from app import app
from flask import jsonify, request, send_from_directory
from google.cloud import texttospeech


import os
import random #used to generate a random string for resource saving
import string

#video generation
import subprocess
import time

simple_online_cache = {}

@app.route('/tts/', methods = ['POST'])
def tts():
    response = {}
    response["audio_uri"] = synthesize_text(request.form.get('tts'))
    response["video_uri"] = generate_animation()
    return jsonify(response)

@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('./static_content', path)

"""Repurposed from https://pythontips.com/2013/07/28/generating-a-random-string/"""
def random_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for x in range(size))

"""Synthesizes speech from the input string of text."""
def synthesize_text(text):
    print(text)
    if text in simple_online_cache:
        return simple_online_cache[text]

    client = texttospeech.TextToSpeechClient()

    input_text = texttospeech.types.SynthesisInput(text=text)

    voice = texttospeech.types.VoiceSelectionParams(
        language_code='en-US',
        name='en-US-Standard-C',
        ssml_gender=texttospeech.enums.SsmlVoiceGender.FEMALE)

    audio_config = texttospeech.types.AudioConfig(
        audio_encoding=texttospeech.enums.AudioEncoding.MP3)

    response = client.synthesize_speech(input_text, voice, audio_config)


    file_name =  random_generator() + 'output.mp3'
    file_path = os.path.join(os.path.dirname(__file__))
    file_path +=  '/static_content/' + file_name

    #save audio  and send the url back
    with open(file_path, 'wb') as out:
        out.write(response.audio_content)
        print('Audio content written to file "output.mp3"')

    simple_online_cache[text] = file_name

    #return {"audio_uri" : file_name }
    return file_name

#For the moment we will generate a preanimated scene from blender
def generate_animation():
    file_name = "example.mp4"
    vfile_name = os.path.join(os.path.dirname(__file__))
    vfile_name +=  '/static_content/' + file_name

    if (os.path.isfile(vfile_name)):
        return file_name
    tic = time.perf_counter()
    #Only works with MACOs for the moment
    blenderFile = "blender_files/pipes_after.blend"
    blenderArgs = ["blender", "-b", blenderFile , "-o", "animation/temp",
            "-E", "BLENDER_WORKBENCH", "-s", "0", "-e", "150", "-t", "2", "-a"]
    blender_p = subprocess.Popen(blenderArgs)
    blender_p.wait()
    ffmpeg_args = ["ffmpeg", "-start_number", "000", "-pattern_type", 
                "glob", "-i", "animation/*.jpg","-pix_fmt", "yuv420p", "-vcodec", "libx264", vfile_name]
    ffmpeg_p = subprocess.Popen(ffmpeg_args)
    ffmpeg_p.wait()
    delete_temp = subprocess.Popen(["rm", "-r", "animation"])
    delete_temp.wait()
    toc = time.perf_counter()
    print(f"Generating video took {toc - tic:0.4f} seconds")

    return file_name
