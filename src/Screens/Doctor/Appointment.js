import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../Global/globalstyles';
import {Back, DoctorImg} from '../../Assets/icons';
import {scheduleData} from '../../Global/Data';
import DocAppointment from '../../Components/DocAppointment';
const Appointment = () => {
  const [List, setList] = useState([{}]);
  useEffect(() => {
    console.log();
    setList(scheduleData);
    console.log('>>>', List);
  });
  return (
    <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
      <Back
        width={50}
        height={50}
        style={{marginTop: '5%', marginHorizontal: '5%'}}
      />
      <View style={{alignItems: 'center'}}>
        <DoctorImg width={110} height={110} style={{marginTop: '15%'}} />
        <Text
          style={{
            fontSize: 22,
            color: 'rgba(14, 16, 18, 1)',
            marginTop: '4%',
            fontFamily: 'NunitoSans_10pt-Bold',
          }}>
          Dr. Chalukya Gunasekara
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'rgba(123, 141, 158, 1)',
            marginTop: '1%',
            fontFamily: 'NunitoSans_10pt-Medium',
          }}>
          Demonologist in Asiri hospital
        </Text>
        <View style={{width: '85%'}}>
          <FlatList
            alwaysBounceVertical
            alwaysBounceHorizontal
            keyboardShouldPersistTaps="handled"
            showsHorizontalScrollIndicator={false}
            data={List}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <DocAppointment
                id={item.id}
                image={item.image}
                name={item.name}
                time={item.time}
                symptom={item.symptom}
              />
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('VerifyCode');
          }}
          style={styles.btnShape}>
          <Text style={styles.btnText}>CONNECT NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  btnShape: {
    
    height: 47,
    width: '85%',
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius: 12,
    backgroundColor: '#1C6BA4',
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 13,
    color: colors.white,
    fontFamily: 'NunitoSans_10pt-Medium',
  },
});
