
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

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
      <Image className="rounded-ful" source={{ uri: "https://i.goopics.net/rsa8ht.png" }} style={{height: hp(20), width: hp(20)}} />

      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Commencer</Text>
      </Pressable>
      {/* className="bg-gradient-to-r from-green-400 to-blue-500" */}
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