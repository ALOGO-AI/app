import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeStackScreen } from '../screens/Home';
import Activites from '../screens/Client/Activites';
import ServicesScreen from '../screens/Client/Services';
import {SettingStackScreen} from '../screens/Client/MonCompte';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Accueil') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Mon compte') {
          iconName = focused ? 'person' : 'person';
        } else if (route.name === 'Services') {
          iconName = focused ? 'apps' : 'apps-outline';
        }
        else if (route.name === 'Activités') {
          iconName = focused ? 'bookmarks' : 'bookmarks-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Accueil" component={HomeStackScreen} />
    <Tab.Screen name="Services" component={ServicesScreen} />
    <Tab.Screen name="Activités" component={Activites} />
    <Tab.Screen name="Mon compte" component={SettingStackScreen} />
  </Tab.Navigator>
  );
};

export default TabNavigator;