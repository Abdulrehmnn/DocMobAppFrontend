import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

export default function CreatePassword({navigation}) {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Text style={styles.text}>Create new Password</Text>

        <Text
          style={[
            styles.text2,
            {alignSelf: 'center', width: '80%', marginTop: '3%'},
          ]}>
          Your new password must be unique from those previously used.
        </Text>
        <View style={[styles.TextInput]}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="New Password"
            style={styles.text2}></TextInput>
        </View>
        <View style={[styles.TextInput, {marginTop: '5%'}]}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Confirm Password"
            style={styles.text2}></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => {
            Alert.alert('PasswordChanged!!');
          }}
          style={styles.btnShape}>
          <Text style={styles.btnText}>Reset Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 26,
    marginTop: '15%',
    marginLeft: '10%',
    width: '80%',

    color: "black",
    fontWeight: '700',
  },
  TextInput: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    marginTop: '15%',
    height: 56,
    paddingLeft: 20,
    paddingTop: 5,

    fontFamily: 'Urbanist',
    color: '#8391A1',
    fontWeight: '100',
    fontSize: 15,
  },
  text2: {
    fontFamily: 'Urbanist',
    color: '#8391A1',
    fontWeight: '100',
    fontSize: 15,
  },
  text3: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: '2%',
    color: '#6A707C',
    fontFamily: 'Urbanist',
    fontWeight: '600',
  },
  btnShape: {
    backgroundColor: "black",
    height: 50,
    width: '80%',
    alignSelf: 'center',
    marginTop: '15%',
    borderRadius: 8,
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 13,
    color: "white",
    fontWeight: '400',
  },
  bottomLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '25%',
  },
  text4: {
    fontWeight: '500',
    color: '#1E232C',
    fontFamily: 'Urbanist',
    fontSize: 13,
  },
  text5: {
    fontWeight: '700',
    color: "black",
    marginLeft: 5,
    fontFamily: 'Urbanist',
    fontSize: 14,
  },
});
