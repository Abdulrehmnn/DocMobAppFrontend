import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default  PatientHome = () => {
  return (
    <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 80}}>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Image
          style={{height: 50, width: 50, borderRadius: 50, marginTop: '5%'}}
          source={{
            uri: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
          }}></Image>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            height: 40,
            width: 220,
            marginLeft: 20,
            borderRadius: 25,
            marginTop: '7%',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'rgba(40, 96, 143, 1)',
              marginHorizontal: 15,
              marginTop: 5,
              fontWeight: '900',
            }}>
            2
          </Text>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 1)',
              fontSize: 12,
              marginTop: '5%',
              marginRight: 8,
            }}>
            Remaining consultations
          </Text>
          <View
            style={{
              backgroundColor: 'rgba(40, 96, 143, 1)',
              borderRadius: 50,
              height: 25,
              width: 25,
              marginTop: 7,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 26,
                fontWeight: '900',
                marginTop: -5,
                color: 'rgba(255, 255, 255, 1)',
              }}>
              +
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({});
