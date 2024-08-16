import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {dotsIcon} from '../Assets/TabSvgs';
const CalenderCard = ({date,day}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'rgba(28, 107, 164, 1)',
          height: 100,
          width: 80,
          borderRadius: 31,
          marginLeft: 20,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            alignSelf: 'center',
            fontSize: 22,
            color: 'rgba(255, 255, 255, 1)',
            marginTop: 20,
          }}>
          {date}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Medium',
            alignSelf: 'center',
            fontSize: 16,
            color: 'rgba(255, 255, 255, 1)',
          }}>
          {day}
        </Text>
      </View>
    </View>
  );
};

export default CalenderCard;

const styles = StyleSheet.create({});
