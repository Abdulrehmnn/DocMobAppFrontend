import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LoginCheck2 } from '../../Assets/icons';

const LoginSuccess = () => {
 
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TabNavigation');
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
        <LoginCheck2/>
      </View>
    </View>
  );
}

export default LoginSuccess

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C6BA4',
  },
});