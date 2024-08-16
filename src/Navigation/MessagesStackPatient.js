import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import VideoCallPatient from '../Screens/Patient/VideoCallPatient';
import VoiceCallPatient from '../Screens/Patient/VoiceCallPatient';
import TextMessagePatient from '../Screens/Patient/TextMessagePatient';
import MessagesPatient from '../Screens/Patient/MessagesPatient';
const Stack = createNativeStackNavigator();

export default function MessagesStackPatient({navigation, route}) {
  
  return (
    <Stack.Navigator initialRouteName="TextMessagePatient">
      <Stack.Screen
        name="MessagesPatient"
        component={MessagesPatient}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VoiceCallPatient"
        component={VoiceCallPatient}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Stack.Screen
        name="TextMessagePatient"
        component={TextMessagePatient}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Stack.Screen
        name="VideoCallPatient"
        component={VideoCallPatient}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
