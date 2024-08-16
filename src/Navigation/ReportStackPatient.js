import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PatientReport from '../Screens/Patient/PatientReport';
const Stack = createNativeStackNavigator();

export default function ReportStackPatient() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="PatientReport">
        <Stack.Screen
          name="PatientReport"
          component={PatientReport}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
