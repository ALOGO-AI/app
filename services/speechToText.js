const API_URL = 'YOUR_API_ENDPOINT';

const SpeechToTextService = {
  transcribeSpeech: async (audioFile) => {
    try {
      const formData = new FormData();
      formData.append('audio', {
        uri: audioFile.uri,
        type: 'audio/mp3',
        name: 'audio.mp3',
      });

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to transcribe speech');
      }

      const transcription = await response.json();
      return transcription;
    } catch (error) {
      console.error('Error transcribing speech', error);
      throw error;
    }
  },
};

export default SpeechToTextService;
