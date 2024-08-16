import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../Global/globalstyles';
import {Back2, Doctor2, Settings,Fb,Vector, Language, Compass, Log} from '../../Assets/icons';
import ProfileComponent from '../../Components/ProfileComponent';

const DoctorProfile = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.pageBackground2,
        height: '100%',
      }}>
      <TouchableOpacity onPress={()=>{
        navigation.goBack();
      }}>
        <Back2
          width={40}
          height={40}
          style={{marginTop: '10%', marginHorizontal: '5%'}}
        />
      </TouchableOpacity>

      <View style={{alignItems: 'center'}}>
        <Doctor2
          width={80}
          height={80}
          style={{
            marginTop: -30,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            color: colors.white,
            marginTop: '2%',
            fontFamily: 'NunitoSans_10pt-Bold',
          }}>
          Doctor Name
        </Text>
      </View>

      <View style={{marginTop: '15%'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DocAccSetting');
          }}>
          <ProfileComponent title="Account Settings" svg={Settings} />
        </TouchableOpacity>
        <ProfileComponent title="Payment Method" svg={Vector} />
        <ProfileComponent title="Language Selection" svg={Language} />
        <ProfileComponent title="Pivacy Policy" svg={Compass} />
        <ProfileComponent title="Terms of use" svg={Compass} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '20%',
        }}>
        <Log width={25} height={25} />
        <Text
          style={{
            color: 'white',
            marginLeft: 10,
            fontSize: 17,
            fontFamily: 'NunitoSans_10pt-Bold',
          }}>
          LogOut
        </Text>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({});
