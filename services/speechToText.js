import React from 'react';
import * as FileSystem from 'expo-file-system';

const API_KEY = "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";

const SpeechToTextService = {
  transcribeSpeech: async (audioFile) => {
    try {
      // Read audio file asynchronously
      const audioData = await FileSystem.readAsStringAsync(audioFile, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const data = FileSystem.readAsStringAsync(audioFile);
      const response = await fetch(
        "https://api-inference.huggingface.co/models/chrisjay/fonxlsr",
        {
          headers: { Authorization: "Bearer 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", "Content-Type": "application/json", },
          method: "POST",
          body: JSON.stringify({ data: audioData }),
        }
      );
      console.log("response de l'api fonxlsr : ", JSON.stringify(response));

      const transcription = await response.json();
      return transcription;
    } catch (error) {
      console.error('Erreur lors de la transcriptioin de l\'audio', error);
      throw error;
    }
  },
};

export default SpeechToTextService;
