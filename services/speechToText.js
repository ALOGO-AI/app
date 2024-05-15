import React from 'react';
import * as FileSystem from 'expo-file-system';

const API_URL = 'YOUR_API_ENDPOINT';
const API_KEY = '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';


const SpeechToTextService = {
  transcribeSpeech: async (audioFile) => {
    try {
      const formData = new FormData();
      formData.append('audio', {
        uri: audioFile.uri,
        type: 'audio/mp3',
        name: 'audio.mp3',
      });

      console.log("Form data : ", formData);

      // const response = await fetch(API_URL, {
      //   method: 'POST',
      //   body: formData,
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to transcribe speech');
      // }

      const response = await fongbeAsr(audioFile).then((response) => {
        console.log(JSON.stringify(response));
      });
      // console.log(response);

      const transcription = await response.json();
      return transcription;
    } catch (error) {
      console.error('Erreur lors de la transcriptioin de l\'audio', error);
      throw error;
    }
  },
};

export default SpeechToTextService;


async function fongbeAsr(filename) {
	const data = FileSystem.readAsStringAsync(filename);
	const response = await fetch(
		"https://api-inference.huggingface.co/models/speechbrain/asr-wav2vec2-dvoice-fongbe",
		{
			headers: { Authorization: `Bearer ${API_KEY}` },
			method: "POST",
			body: data,
		}
	);
  // console.log("response fongbeAsr : ", response);
	const result = await response.json();
	return result;
}