export default ({ config }) => ({
    ...config,
    icon: "./assets/images/Logo.png",
    splash: {
      image:
        "https://i.goopics.net/rsa8ht.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
  });

  // export default ({ config }) => ({
  //   ...config,
  //   icon: "./assets/images/Logo.png",
  //   splash: {
  //     image: "./assets/images/Logo.png",
  //     resizeMode: "contain",
  //     backgroundColor: "#ffffff",
  //   },
  // });

  // "plugins": [
  //   [
  //     "@react-native-voice/voice",
  //     {
  //       "microphonePermission": "CUSTOM: Allow $(PRODUCT_NAME) to access the microphone",
  //       "speechRecognitionPermission": "CUSTOM: Allow $(PRODUCT_NAME) to securely recognize user speech"
  //     }
  //   ]
  // ]