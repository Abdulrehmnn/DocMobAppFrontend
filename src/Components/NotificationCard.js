import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {dotsIcon} from '../Assets/TabSvgs';
import {activePaitentIcon} from '../Assets/TabSvgs';
const NotificationCard = ({svg, heading, subtitle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 28,
        width: '100%',
        height: 110,
        alignSelf: 'center',
        marginTop: 20,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          height: 40,
          width: '20%',
          borderRadius: 20,
          marginLeft: '5%',
          marginTop: 30,
        }}>
        <SvgXml xml={svg} style={{ marginLeft: '5%',marginTop:-3}}></SvgXml>
      </View>
      <View style={{marginLeft: '6%', marginTop: '11%'}}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 14,
            color: 'rgba(14, 16, 18, 1)',
          }}>
          {heading}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Light',
            fontSize: 16,
            color :"rgba(123, 141, 158, 1)"
          }}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({});
