import {StyleSheet, Text, View} from 'react-native';
import React,{useLayoutEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePatient from '../Screens/Patient/HomePatient';
import ProfilePatient from '../Screens/Patient/ProfilePatient';
import DoctorSearch from '../Screens/Patient/DoctorSearch';
import Appointment2 from '../Screens/Patient/Appointment2';
import Appointment1 from '../Screens/Patient/Appointment1';
import DoctorDetails from '../Screens/Doctor/DoctorDetails';
import TextMessagePatient from '../Screens/Patient/TextMessagePatient';
const Stack = createNativeStackNavigator();
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

export default function HomeStackPatient({route,
  navigation}) {
  // React.useLayoutEffect(() => {
    
  //       const routeName = getFocusedRouteNameFromRoute(route);

  //       if (routeName === 'Appointment2' || routeName === 'Appointment1') {
  //         navigation.setOptions({tabBarStyle: {display: 'none'}});
  //         navigation.getParent()?.setOptions({headerShown: false});
  //         navigation
  //           .getParent()
  //           ?.getParent()
  //           ?.setOptions({tabBarStyle: {display: 'none'}});
  //       } else {
  //         navigation.setOptions({
  //           tabBarStyle: {display: 'flex'},
  //         });
  //         navigation.getParent()?.setOptions({headerShown: true});
  //         navigation
  //           .getParent()
  //           ?.getParent()
  //           ?.setOptions({tabBarStyle: {display: 'flex'}});
  //       }
  //     }, [navigation, route]);
  return (
    <Stack.Navigator initialRouteName="HomePatient">
      <Stack.Screen
        name="HomePatient"
        component={HomePatient}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfilePatient"
        component={ProfilePatient}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DoctorSearch"
        component={DoctorSearch}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DoctorDetails"
        component={DoctorDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Appointment2"
        component={Appointment2}
        options={{
          headerShown: false,
          tabBarVisible: false, // Hide the bottom tab bar on this screen
        }}
      />
      <Stack.Screen
        name="Appointment1"
        component={Appointment1}
        options={{
          headerShown: false,
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
