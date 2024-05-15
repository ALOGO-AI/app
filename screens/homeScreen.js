import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  // SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  FlatList,
  StyleSheet,
} from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import SafeAreaView from 'react-native-safe-area-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';

import Chat from '../components/chat';
import LoginPage from './actions/connexion';
import SignupPage from './actions/inscription';
import CreditCardPage from './actions/credit';
import BankAccountStatementPage from './actions/bankAccount';
import TransfertPage from './actions/transfert';
import OTPPage from './actions/otp';

import SpeechToTextService from '../services/speechToText';
import TextToActionService from '../services/textToAction';

import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';
import * as FileSystem from 'expo-file-system';
import WaveForm from '@alirehman7141/react-native-audiowaveform';

const App = () => {
  const [result, setResult] = useState('');
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState();
  const [ttext, setText] = useState('');
  const [language, setLanguage] = useState("fr-Fr");
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [sound, setSound] = useState(null);
  const [playing, setPlaying] = useState(-1)

  const [audioList, setAudioList] = useState([]);

  useEffect(() => {
    fetchAudioFiles();
  }, []);

  const createAudioDirectory = async () => {
    try {
      const directory = `${FileSystem.documentDirectory}audios/`; // Chemin du répertoire
      await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
      console.log('Répertoire audio créé avec succès :', directory);
      return directory;
    } catch (error) {
      console.error('Erreur lors de la création du répertoire audio :', error);
      return null;
    }
  };

  const fetchAudioFiles = async () => {
    try {
      const directory = `${FileSystem.documentDirectory}audios/`;
      const files = await FileSystem.readDirectoryAsync(directory);
      setAudioList(files);
    } catch (error) {
      console.error('Erreur lors de la récupération des fichiers audio :', error);
    }
  };

  const renderItem = ({ item }) => (
    <View key={item} className="flex-row justify-end">
      <TouchableOpacity onPress={
        playing !== item ?
          () => {
            playAudio(item)
            setPlaying(item)
          } :
          () => {
            pauseMusic()
            setPlaying(-1)
          }
      } style={styles.playButton}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <Ionicons
            name={playing !== item ?
              "play" :
              "pause"}
            size={25}
            color="white" >
          </Ionicons>
          {/* <Text
              style={styles.fileName}>
              {item}
          </Text> */}
          <View style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            width: "90%",
          }}
          />
        </View>
      </TouchableOpacity>
      {/* <WaveForm source={{uri:item}} style={styles.fileName} /> */}
    </View>
  );

  const playAudio = async (fileName) => {
    const soundObject = new Audio.Sound();
    try {
      const audioUri = `${FileSystem.documentDirectory}audios/${fileName}`;
      await soundObject.loadAsync({ uri: audioUri });
      await soundObject.playAsync();
      console.log('Audio joué avec succès.');
    } catch (error) {
      console.error('Erreur lors de la lecture de l\'audio :', error);
    }
  };

  const playAudioUri = async (audioUri) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({ uri: audioUri });
      setSound(soundObject);
      await soundObject.playAsync();
      console.log('Audio joué avec succès.');
    } catch (error) {
      console.error('Erreur lors de la lecture de l\'audio :', error);
    }
  };

  const pauseMusic = async () => {
    await sound.pauseAsync();
  }

  // Lorsqu'on clique sur le bouton de lancement du vocal
  const startRecording = async () => {
    setRecording(true);
    try {
      // Créer le répertoire audio si nécessaire
      const directory = await createAudioDirectory();
      if (!directory) {
        return;
      }

      // await Voice.start(language);
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (error) {
      console.log('Erreur lors de la création du vocal : ', error);
    }
  };

  // Lorsqu'on clique sur le bouton d'arrêt du vocal
  const stopRecording = async () => {
    if (!recording) {
      console.warn('Aucun enregistrement en cours.');
      return;
    }
    try {
      // await Voice.stop();
      console.log('Stopping recording..');
      await recording.stopAndUnloadAsync();
      await Audio.setAudioModeAsync(
        {
          allowsRecordingIOS: false,
        }
      );
      const uri = recording.getURI();
      // Lire l'audio avec son URI
      // await playAudioUri(uri);

      // Générer le nom de fichier audio basé sur la date et l'heure actuelles
      currentDate = new Date();
      const dateString = currentDate.toISOString().replace(/:/g, '-');
      const fileName = dateString;

      // Copier le fichier audio vers le répertoire créé
      const destinationUri = `${FileSystem.documentDirectory}audios/${fileName}.wav`;

      await FileSystem.copyAsync({ from: uri, to: destinationUri }); // moveAsync

      console.log('Recording stopped and stored at', destinationUri);

      await transcribeAudio(destinationUri);

      setRecording(undefined);
      // setRecording(false);
    } catch (error) {
      console.log('Erreur lors de l\'arrêt du vocal : ', error);
      setRecording(undefined);
      setLoading(false);
    }
  };

  // Récupérer la réponse de transcription
  const transcribeAudio = async (audio) => {
    // console.log("Hello transcribeAudio :", audio);
    try {
      setLoading(true);
  
      // Envoi de l'audio à l'API
      const response = await SpeechToTextService.transcribeSpeech(audio);
  
      // setLoading(false);
  
      if (response.ok) {
        const text = response.text();
        setText(text);
        const resultAction = await TextToActionService.getAction(text);
        console.log("resultAction", resultAction);
        
        // Navigation vers l'écran en fonction de l'action reçue de l'API
        setAction(resultAction);
        setLoading(false);
      } else {
        Alert.alert('Erreur', response.msg);
        setLoading(false);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération de la réponse :', error);
      setLoading(false);
      Alert.alert('Erreur', 'Une erreur s\'est produite lors de la communication avec le serveur.');
    }

  }

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5 mt-20">
        <View className="flex-row justify-center">
          <Image
            source={{ uri: "https://i.goopics.net/rsa8ht.png" }}
            style={{ height: hp(10), width: hp(10) }}
          />
        </View>

        {/* <View>
          <FlatList
            data={audioList}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            ListEmptyComponent={<Text>Aucun enregistrement audio trouvé</Text>}
          />
        </View> */}

        {(() => {
            switch (action) {
              case 'Register':
                return (
                  <SignupPage />
                );
              case 'Login':
                return (
                  <LoginPage />
                );
              case 'Credit':
                return (
                  <CreditCardPage />
                );
              case 'Card':
                return (
                  <CreditCardPage />
                );
              case 'Statement':
                return (
                  <BankAccountStatementPage />
                );
              case 'Balance':
                return (
                  <BankAccountStatementPage />
                );
              case 'Transfert':
                return (
                  <TransfertPage />
                );
              case 'OTP':
                return (
                  <OTPPage />
                );
              default:
                return (
                  <Chat />
                );
            }
          })()}

        {/* recording, clear and stop buttons */}
        <View className="flex justify-center items-center">
          {
            loading ? (
              <Image
                source={{ uri: "https://i.goopics.net/vzv9er.gif" }}
                style={{ width: hp(10), height: hp(10) }}
              />
            ) :
              recording ? (
                <TouchableOpacity className="space-y-2" onPress={stopRecording}>
                  {/* recording stop button */}
                  <Image
                    className="rounded-full"
                    source={{ uri: "https://i.goopics.net/v9x41z.gif" }}
                    style={{ width: hp(10), height: hp(10) }}
                  />
                </TouchableOpacity>

              ) : (
                <TouchableOpacity onPress={startRecording}>
                  {/* recording start button */}
                  <Image
                    className="rounded-full"
                    source={{ uri: "https://i.goopics.net/43m9n3.png" }}
                    style={{ width: hp(10), height: hp(10) }}
                  />
                </TouchableOpacity>
              )
          }
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    backgroundColor: "#fff",
    height: "100%",
    marginTop: 50,
  },
  heading: {
    color: "green",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  list: {
    marginTop: 20,
    flex: 1,
    flexDirection: "column",
  },
  fileName: {
    fontSize: 18,
    color: "white",
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: 'gray',
    borderRadius: 50,
    padding: 10,
    margin: 10,
  },
});