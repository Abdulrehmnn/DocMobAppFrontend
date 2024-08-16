import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationPatient from '../Screens/Patient/NotificationPatient';
const Stack = createNativeStackNavigator();

export default function NotificationStackPatient() {
  return (
    <Stack.Navigator initialRouteName="NotificationPatient">
      <Stack.Screen
        name="NotificationPatient"
        component={NotificationPatient}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
