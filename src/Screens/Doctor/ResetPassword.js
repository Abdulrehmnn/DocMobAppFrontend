import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import * as Animatable from 'react-native-animatable';
  import {colors} from '../../Global/globalstyles';
  import {IconButton} from 'react-native-paper';
  export default function ResetPassword({navigation}) {
    return (
      <View style={styles.Container}>
        <ScrollView>
          <View style={{flex: 1}}>
            <IconButton
              icon="chevron-left"
              size={30}
              onPress={() => navigation.goBack()}
            />
  
            <Text style={styles.text}>Reset password</Text>
            <Text style={styles.text1}>
              Please complete the form below to reset your password.
            </Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.text6}>New Password </Text>
            <TextInput
            //   placeholder="Enter New Password"
              style={styles.TextInput}></TextInput>
          </View>
          <View style={styles.box2}>
            <Text style={styles.text6}>Confirm the New Password </Text>
            <TextInput
            //   placeholder="Enter Confirm Password"
              style={styles.TextInput}></TextInput>
          </View>
  
        
          <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('VerifyCode');
                  }}
                  style={styles.btnShape}>
                  <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
  
        
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: colors.pageBackground,
    },
    text: {
      alignSelf: 'center',
      fontSize: 24,
      marginTop: '9%',
      color: colors.black,
      fontFamily: 'NunitoSans_7pt-Black',
    },
    text6: {
      fontSize: 14,
      fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
      color: colors.black,
      width: '87%',
      alignSelf: 'center',
      marginBottom: 5,
    },
    TextInput: {
      alignSelf: 'center',
      width: '87%',
      backgroundColor: colors.white,
      borderRadius: 4,
      elevation:1, 
      height: 47,
      paddingLeft: 20,
      paddingTop: 5,
      borderBottomWidth: 0,
      color: 'rgba(26, 69, 99, 1)',
      fontWeight: '900',
      fontSize: 15,
      fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    },
    text1: {
      textAlign: 'center',
      fontSize: 13,
      color: colors.black,
      marginHorizontal: '15%',
      marginTop: 10,
      fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
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
  
      height: 47,
      width: '87%',
      alignSelf: 'center',
      marginTop: '10%',
      borderRadius: 4,
      backgroundColor: colors.btnclr,
    },
    btnText: {
      alignSelf: 'center',
      fontSize: 15,
      marginTop: 13,
      color: colors.white,
      fontWeight: '900',
    },
    bottomLine: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: '25%',
    },
    box1: {
      width: '100%',
      marginTop: '15%',
    },
    box2: {
        width: '100%',
        marginTop: '5%',
      },
    text4: {
      fontWeight: '500',
      color: '#1E232C',
      fontFamily: 'Urbanist',
      fontSize: 13,
    },
    text5: {
      fontWeight: '700',
      color: 'black',
      marginLeft: 5,
      fontFamily: 'Urbanist',
      fontSize: 14,
    },
  });
  