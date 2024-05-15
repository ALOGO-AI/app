export default ({ config }) => ({
    ...config,
    icon: "https://i.goopics.net/rsa8ht.png",
    splash: {
      image:
        "https://i.goopics.net/rsa8ht.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    "owner": "koudous25",
    "slug": "alogo-8t8etg8nye1-ecypoegvv",
    "updates": {
      "url": "https://u.expo.dev/ec666cb4-bfdc-4d53-9661-28db76201228"
    },
    "android": {
      "runtimeVersion": "1.0.0"
    },
    "ios": {
      "runtimeVersion": {
        "policy": "appVersion"
      }
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