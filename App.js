import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomTab from './BottomTab';


export default function App() {
  return (
    <NavigationContainer>
      <BottomTab/>

    </NavigationContainer>
  );
}
