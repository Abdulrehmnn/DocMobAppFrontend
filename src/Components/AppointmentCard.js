import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../Global/globalstyles';



const AppointmentCard = ({date, day, time, name, disease}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'rgba(28, 107, 164, 1)',
        width: 250,
        height: 120,
        marginLeft: 25,
        borderRadius: 28,
        marginTop: 20,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.14)',
          height: 100,
          width: '32%',
          borderRadius: 31,
          marginLeft: '5%',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            alignSelf: 'center',
            fontSize: 22,
            marginTop: 20,
            color: colors.white,
          }}>
          {date}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Medium',
            alignSelf: 'center',
            fontSize: 16,
            color: colors.white,
          }}>
          {day}
        </Text>
      </View>
      <View style={{marginLeft: '6%', marginTop: '10%'}}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Light',
            fontSize: 14,
            color: colors.white,
          }}>
          {time}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 16,
            color: colors.white,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Light',
            fontSize: 14,
            color: colors.white,
          }}>
          {disease}
        </Text>
      </View>
    </View>
  );
};

export default AppointmentCard;
