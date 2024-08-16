import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {dotsIcon} from '../Assets/TabSvgs';
import {activePaitentIcon} from '../Assets/TabSvgs';
const ScheduleCard = ({name,image,symptom,time}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'rgba(28, 107, 164, 1)',
        borderRadius: 28,
        width: '90%',
        height: 120,
        alignSelf: 'center',
        marginTop: 20,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          height: 60,
          width: '20%',
          borderRadius: 20,
          marginLeft: '5%',
          marginTop: 30,
        }}>
        <Image
          style={{
            width: 50,
            height: 50,
            marginLeft: 7,
            borderRadius: 50,
            marginTop: 5,
          }}
          source={{uri: image}}
        />
      </View>
      <View style={{marginLeft: '6%', marginTop: '10%'}}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Light',
            fontSize: 14,
          }}>
          {time}{' '}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 16,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Light',
            fontSize: 14,
          }}>
          {symptom}
        </Text>
      </View>
      <View>
        <SvgXml
          xml={dotsIcon}
          style={{marginTop: 10, alignSelf:"flex-end"}}></SvgXml>
      </View>
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({});
