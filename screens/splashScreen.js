
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  Button,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";


export default function MainScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
    <Text></Text>
      {/* <Text
        style={{
          color: "black",
          fontSize: 30,
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        ALƆGƆ
      </Text> */}
      <Image       source={require("../assets/images/Logo.png")}/>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Commencer</Text>
      </Pressable>
      {/* className="bg-gradient-to-r from-green-400 to-blue-500" */}
      {/* <TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-emerald-600 mx-5 p-4 rounded-3xl">
        <Text style={{fontSize: 20}} className="text-center font-bold text-white">
          Commencer
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // color:"#",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});