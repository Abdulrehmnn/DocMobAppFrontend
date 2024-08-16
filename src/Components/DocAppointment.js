import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {dotsIcon} from '../Assets/TabSvgs';
import {activePaitentIcon} from '../Assets/TabSvgs';
import {colors} from '../Global/globalstyles';
import {Doc, Clock} from '../Assets/icons';

const DocAppointment = ({name, image, symptom, time}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 28,
        width: '100%',
        height: 90,
        alignSelf: 'center',
        marginTop: 20,
      }}>
      <View></View>
      <View
        style={{
          backgroundColor: 'rgba(220, 237, 249, 1)',
          height: 65,
          width: '25%',
          borderRadius: 20,
          marginLeft: '3%',
          marginTop: 13,
        }}>
        <Clock
          width={35}
          height={35}
          style={{marginVertical: '20%', marginHorizontal: '25%'}}
        />
      </View>
      <View style={{marginLeft: '6%', marginTop: '6%'}}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 14,
            color: 'rgba(14, 16, 18, 1)',
          }}>
          {/* {name} */}
          Appointment
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 17,
            marginTop: 10,
            color: 'rgba(14, 16, 18, 1)',
          }}>
          {time}
        </Text>
      </View>
      <View>
      </View>
    </View>
  );
};

export default DocAppointment;

const styles = StyleSheet.create({});
