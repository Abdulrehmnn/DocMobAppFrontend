import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DrawerNavigation from './DrawerNavigation';

import TabNavigation from "./TabNavigation"
import DocLogin from '../Screens/Doctor/DocLogin';
import DocSignUp from '../Screens/Doctor/DocSignUp';
import ForgotPassword from '../Screens/Doctor/ForgotPassword';
import SplashScreen from '../Screens/Doctor/SplashScreen';
import CreatePassword from '../Screens/Doctor/CreatePassword';
import LoginSuccess from '../Screens/Doctor/LoginSuccess';
import VerifyCode from '../Screens/Doctor/VerifyCode';
import ResetPassword from '../Screens/Doctor/ResetPassword';
import LogInPatient from '../Screens/Patient/LogInPatient';
import SignUpPatient from '../Screens/Patient/SignUpPatient';
import HomePatient from '../Screens/Patient/HomePatient';
import TabNavigationPatient from './TabNavigationPatient';


import ForgotPasswordPatient from '../Screens/Patient/ForgotPasswordPatient';
import VerifyCodePatient from '../Screens/Patient/VerifyCodePatient';
import CreatePasswordPatient from '../Screens/Patient/CreatePasswordPatient';
import LoginSuccessPatient from '../Screens/Patient/LoginSuccessPatient';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

const Root = ({navigation}) => {
  const [showSplash, setShowSplash] = useState(true);
  const checkLogin = async () => {
    const id = await AsyncStorage.getItem('USERID');
    if (id != null) {

      navigation.navigate('TabNavigationPatient');
    } else {
      navigation.navigate('LogInPatient');
    }
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     checkLogin();

  //     setShowSplash(false);

      
  //   }, 1000);
  // }, []);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* {showSplash ? ( */}
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        {/* ) : null} */}
        <Stack.Screen
          name="LogInPatient"
          component={LogInPatient}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpPatient"
          component={SignUpPatient}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="DocLogin"
          component={DocLogin}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="DocSignUp"
          component={DocSignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPasswordPatient"
          component={ForgotPasswordPatient}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VerifyCode"
          component={VerifyCode}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VerifyCodePatient"
          component={VerifyCodePatient}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreatePasswordPatient"
          component={CreatePasswordPatient}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginSuccess"
          component={LoginSuccess}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginSuccessPatient"
          component={LoginSuccessPatient}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabNavigationPatient"
          component={TabNavigationPatient}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({});
