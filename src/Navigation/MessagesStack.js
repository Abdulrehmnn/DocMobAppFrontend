import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Messages from '../Screens/Doctor/Messages';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import VideoCall1 from '../Screens/Doctor/VideoCall1';
import VoiceCall from '../Screens/Doctor/VoiceCall';
import TextMessage from '../Screens/Doctor/TextMessage';
const Stack = createNativeStackNavigator();

export default function MessagesStack({navigation,route}) {
  

  
  return (
    <Stack.Navigator initialRouteName="TextMessage">
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VoiceCall"
        component={VoiceCall}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Stack.Screen
        name="TextMessage"
        component={TextMessage}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Stack.Screen
        name="VideoCall1"
        component={VideoCall1}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
