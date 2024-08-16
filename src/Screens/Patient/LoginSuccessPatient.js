import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {LoginCheck} from '../../Assets/TabSvgs';
const LoginSuccessPatient = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TabNavigationPatient');
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [navigation]);


  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'center',
          marginVertical: '90%',
        }}>
        <SvgXml xml={LoginCheck}></SvgXml>
      </View>
    </View>
  );
};

export default LoginSuccessPatient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
