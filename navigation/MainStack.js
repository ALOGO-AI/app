import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';


const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" options={{ headerShown: false }} component={TabNavigator}/>
    </Stack.Navigator>
  );
};

export default MainStack;