import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {dotsIcon} from '../Assets/TabSvgs';
import {activePaitentIcon} from '../Assets/TabSvgs';
const PharmacyCard = ({image, name, distance, review, total_reviews}) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 28,
        width: 190,
        height: 220,
        alignSelf: 'center',
        marginTop: 20,
        margin: 5,
        marginBottom: 20,
      }}>
      <Image
        style={{
          width: 190,
          height: 100,
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
        }}
        source={{uri: image}}
      />

      <View
        style={{
          marginLeft: '10%',
          marginTop: '10%',
          alignContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 16,
            color: 'rgba(14, 16, 18, 1)',
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Medium',
            fontSize: 14,
            marginTop: 10,
            color: 'background: rgba(74, 84, 94, 1);',
          }}>
          {distance}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <SvgXml xml={activePaitentIcon} style={{marginRight: 10}}></SvgXml>
          <Text
            style={{
              fontFamily: 'NunitoSans_10pt-Medium',
              fontSize: 14,
              marginRight: 10,
              color: 'background: rgba(14, 16, 18, 1);',
            }}>
            {review}
          </Text>
          <Text
            style={{
              fontFamily: 'NunitoSans_10pt-Medium',
              fontSize: 14,
              color: 'background: rgba(74, 84, 94, 1)',
            }}>
            {total_reviews}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PharmacyCard;

const styles = StyleSheet.create({});
