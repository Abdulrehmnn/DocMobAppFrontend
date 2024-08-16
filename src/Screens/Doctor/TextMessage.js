import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight,Image ,TextInput,KeyboardAvoidingView} from 'react-native'
import React, {useState,useEffect} from 'react'
import {SvgXml} from 'react-native-svg';
import {bacbggreay} from '../../Assets/TabSvgs';

import {callIcon, linkSvgIcon, sendSvgIcon} from '../../Assets/TabSvgs';
import {videBg} from '../../Assets/TabSvgs';
import {videoIcon} from '../../Assets/TabSvgs';
const TextMessage = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View>
        <View
          style={{
            backgroundColor: 'rgba(220, 237, 249, 1)',
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              height: 85,
              width: '100%',
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              flexDirection: 'row',
              zIndex: 1,
            }}>
            <TouchableHighlight
              onPress={() => {
                navigation.goBack();
              }}>
              <SvgXml
                xml={bacbggreay}
                style={{marginTop: 20, marginLeft: '7%'}}></SvgXml>
            </TouchableHighlight>

            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  color: 'black',
                  marginTop: 15,
                  fontSize: 16,
                  borderRadius: 100,
                  height: 50,
                  width: 50,
                  fontFamily: 'NunitoSans_10pt-Light',
                }}
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
                }}
              />

              <View style={{marginRight: 40, marginLeft: 20}}>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 20,
                    marginLeft: 10,
                    fontSize: 16,
                    fontFamily: 'NunitoSans_10pt-Bold',
                  }}>
                  Name
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 10,
                      fontSize: 13,
                      fontFamily: 'NunitoSans_10pt-Light',
                    }}>
                    En ligne
                  </Text>
                  <View
                    style={{
                      marginLeft: 5,
                      height: 6,
                      width: 6,
                      marginTop: 6,
                      backgroundColor: 'rgba(39, 174, 96, 1)',
                      borderRadius: 100,
                    }}></View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('VoiceCall');
                }}>
                <SvgXml xml={callIcon} style={{marginTop: 20}}></SvgXml>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('VideoCall1');
                }}
                style={{marginLeft: 10}}>
                <SvgXml xml={videBg} style={{marginTop: 20}}></SvgXml>
                <SvgXml
                  xml={videoIcon}
                  style={{marginLeft: 13, marginTop: -28}}></SvgXml>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'transparent',
              height: '80%',
              width: '90%',
              alignSelf: 'center',
            }}>
            <View style = {{marginTop: "190%"}}>
              <SvgXml
                xml={linkSvgIcon}
                style={{
                  marginBottom: -70,
                  marginLeft: '5%',
                  zIndex: 1,
                }}></SvgXml>

              <TextInput
                placeholder="Enter message.."
                style={{
                  paddingLeft: 60,
                  marginRight: 30,
                  color: 'black',
                  fontSize: 17,
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderRadius: 12,
                  height: 60,
                  marginTop: 30,
                  width: '100%',
                  fontFamily: 'NunitoSans_10pt-Medium',
                }}
                placeholderTextColor={'rgba(25, 52, 105, 0.6)'}></TextInput>
              <SvgXml
                xml={sendSvgIcon}
                style={{
                  marginTop: -55,
                  alignSelf: 'flex-end',
                  marginRight: 10,
                }}></SvgXml>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default TextMessage

const styles = StyleSheet.create({})