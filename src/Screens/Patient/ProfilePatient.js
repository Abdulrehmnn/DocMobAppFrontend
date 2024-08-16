import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Back2, Star, DotsA} from '../../Assets/icons';

const ProfilePatient = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: '20%', backgroundColor: '#1C6BA4'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: '5%',
            justifyContent: 'space-between',
          }}>
          <Back2 width={35} height={35} style={{marginHorizontal: '5%'}} />
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'NunitoSans_10pt-Bold',
              marginTop: '2%',
            }}>
            Details
          </Text>
          <DotsA width={35} height={35} style={{marginHorizontal: '5%'}} />
        </View>
      </View>
      <View
        style={{
          width: '80%',
          backgroundColor: 'white',
          height: '15%',
          elevation: 5,
          alignSelf: 'center',
          marginTop: -60,
          borderRadius: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}></View>
    </View>
  );
};

export default ProfilePatient;

const styles = StyleSheet.create({});
