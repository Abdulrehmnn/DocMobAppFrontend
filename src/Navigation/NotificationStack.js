import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notification from '../Screens/Doctor/Notification';
const Stack = createNativeStackNavigator();

export default function NotificationStack() {
  return (
      <Stack.Navigator initialRouteName="Notification">
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
