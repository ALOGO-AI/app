import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from './screens/splashScreen';
import HomeScreen from './screens/homeScreen';

const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <HomeStack.Navigator screenOptions={{headerShown: false}} initialRouteName='Splash'>
        {/* Routes */}
        <HomeStack.Screen name="Splash" component={SplashScreen} />
        <HomeStack.Screen name="Home" component={HomeScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
