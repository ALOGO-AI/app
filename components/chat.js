import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Chat() {
  return (
    <ScrollView style={{height: hp(60)}} bounces={false} showsVerticalScrollIndicator={false} className="space-y-4">
        <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">Que fait ALƆGƆ ?</Text>
        <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
            <View className="flex-row items-center space-x-1">
                <Image className="rounded-ful" source={require('../assets/images/Logo.png')} style={{height: hp(4), width: hp(4)}} />
                <Text style={{fontSize: wp(4.8)}} className="font-semibold text-gray-700">Votre Assistant vocal de la BOA</Text>
            </View>
            
            <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
                Dites nous ce que nous pouvons faire pour vous
            </Text>
        </View>
    </ScrollView>
  )
}