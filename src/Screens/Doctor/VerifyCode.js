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
  export default function VerifyCode({navigation}) {
    return (
      <View style={styles.Container}>
        <ScrollView>
          <View style={{flex: 1}}>
            <IconButton
              icon="chevron-left"
              size={30}
              onPress={() => navigation.goBack()}
            />
  
            <Text style={styles.text}>Verification code</Text>
            <Text style={styles.text1}>
            Enter the security code we sent to your email address 
            </Text>
            <Text style={styles.text2}>
            mouh@mouh.com
            </Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.text6}>Code</Text>
            <TextInput
              placeholder="Enter Code"
              keyboardType='numeric'
              style={styles.TextInput}></TextInput>
          </View>
  
        
          <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ResetPassword');
                  }}
                  style={styles.btnShape}>
                  <Text style={styles.btnText}>Verify</Text>
                </TouchableOpacity>
                <View style={styles.bottomLine}>
                <Text style={styles.text4}>Didn't receive a code ? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DocSignUp');
                  }}>
                  <Text style={styles.text5}>Resend</Text>
                </TouchableOpacity>
              </View>
        
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
    bottomLine: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '15%',
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
      fontSize: 15,
      color: colors.black,
      marginHorizontal: '12%',
      marginTop: 10,
      fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
    },
    text2: {
     fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
      color: colors.darkblue,
      textAlign: 'center',
      fontSize:15,
    },
    text4: {
        fontWeight: '500',
        color: '#757F8E',
        fontFamily: 'NunitoSans_7pt-Black',
        fontSize: 13,
      },
      text5: {
        fontWeight: '700',
        color: colors.darkblue,
        marginLeft: 5,
        fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
        fontSize: 14,
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
    box1: {
      width: '100%',
      marginTop: '12%',
    },
    text6: {
        fontSize: 14,
        fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
        color: colors.black,
        width: '87%',
        alignSelf: 'center',
        marginBottom: 5,
      },
  });
  