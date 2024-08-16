import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SchedulePatient from '../Screens/Patient/SchedulePatient';
const Stack = createNativeStackNavigator();

export default function ScheduleStackPatient() {
  return (
    <Stack.Navigator initialRouteName="SchedulePatient">
      <Stack.Screen
        name="SchedulePatient"
        component={SchedulePatient}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
