import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {dotsIcon} from '../Assets/TabSvgs';
import { activePaitentIcon } from '../Assets/TabSvgs';
import { Star, Tick } from '../Assets/icons';
const DoctorCard = ({image,name, designation ,review,review2}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 28,
        width: '90%',
        height: 120,
        alignSelf: 'center',
        marginTop: 20,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          height: 100,
          width: '30%',
          borderRadius: 31,
          marginLeft: '5%',
          marginTop: 10,
        }}>
         {image ? (
          <Image source={require('../Assets/Images/DocImage.png')} style={styles.cardImage} />
       
      ) : (
        <Image source={{uri : image}} style={styles.cardImage} />
      )}
        {/* <SvgXml
          xml={activePaitentIcon}
          style={{marginTop: -90, marginLeft: '80%'}}></SvgXml> */}
      </View>
      <View
        style={{
          marginLeft: '6%',
          marginTop: '5%',
          alignContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 22,
            color: 'rgba(14, 16, 18, 1)',
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_6pt-Bold',
            fontSize: 14,
            color: 'rgba(74, 84, 94, 1)',
          }}>
          {designation}
        </Text>
        <View style={{flexDirection:'row'}}>
        <Star
          width={17}
          height={17}
          style={{marginTop: 15, }}
        />
         <Text
          style={{
            fontFamily: 'NunitoSans_10pt-Bold',
            fontSize: 16,
            marginTop:8, 
            marginHorizontal:5,
            color: 'rgba(74, 84, 94, 1)',
          }}>
              {review}
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans_6pt-Bold',
            fontSize: 16,
            marginTop:8, 
            marginHorizontal:5,
            color: '#4A545E',
          }}>
              {review2}
        </Text>
   
         <Tick
          width={20}
          height={20}
          style={{marginTop: '5%', }}
        />

        </View>
      </View>
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({});
