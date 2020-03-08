from app import app
from flask import jsonify, request, send_from_directory
from google.cloud import texttospeech

import os
import random #used to generate a random string for resource saving
import string

simple_online_cache = {}

@app.route('/tts/', methods = ['POST'])
def tts():
    return jsonify(synthesize_text(request.form.get('tts')))

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

    return {"audio_uri" : file_name }
