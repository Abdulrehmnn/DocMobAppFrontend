import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Schedule from '../Screens/Doctor/Schedule';
const Stack = createNativeStackNavigator();

export default function ScheduleStack() {
  return (
      <Stack.Navigator initialRouteName="Schedule">
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
