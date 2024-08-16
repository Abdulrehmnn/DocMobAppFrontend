import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {dotsIcon} from '../Assets/TabSvgs';
import {activePaitentIcon} from '../Assets/TabSvgs';
import {colors} from '../Global/globalstyles';
import {Doc, Dotsv} from '../Assets/icons';

const WhiteCard = ({name, image, symptom, time}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 28,
        width: '90%',
        height: 95,
        alignSelf: 'center',
        marginTop: 20,
      }}>
      <View></View>
      <View
        style={{
          backgroundColor: 'rgba(220, 237, 249, 1)',
          height: 70,
          width: '23%',
          borderRadius: 20,
          marginLeft: '3%',
          marginTop: 13,
        }}>
        <Doc
          width={40}
          height={40}
          style={{marginVertical: '15%', marginHorizontal: '20%'}}
        />
      </View>
      <View style={{marginLeft: '6%', marginTop: '6%'}}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 19,
            color: 'rgba(14, 16, 18, 1)',
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Light',
            fontSize: 15,
            marginTop: 10,
            color: '4A545E',
          }}>
          {symptom}
        </Text>
      </View>
      <View>
      <Dotsv
          width={20}
          height={20}
          style={{marginTop: '30%', marginHorizontal: '17%'}}
        />
      </View>
    </View>
  );
};

export default WhiteCard;

const styles = StyleSheet.create({});
