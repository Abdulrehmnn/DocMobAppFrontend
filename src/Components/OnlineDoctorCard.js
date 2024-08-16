import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {dotsIcon} from '../Assets/TabSvgs';
import {activePaitentIcon} from '../Assets/TabSvgs';
import {Star, Tick} from '../Assets/icons';
 
const OnlineDoctorCard = ({image, name, designation, review, review2}) => {
  return (
    <View >
      <View >
        {image ? (
          <Image
            source={{uri: image}}
            style={{
              height: 90,
              width: 95,
              marginLeft: 20,
              borderRadius: 25,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginTop: 10,
            }}
          />
        ) : (
          <Image
            source={require('../Assets/Images/DocImage.png')}
            // style={styles.cardImage}
          />
        )}
      </View>
      <View style={{marginTop: -90, height: 90, alignSelf :"flex-end"}}>
        <SvgXml xml={activePaitentIcon}></SvgXml>
      </View>
    </View>
  );
};

export default OnlineDoctorCard;

const styles = StyleSheet.create({});
