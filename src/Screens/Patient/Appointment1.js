import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../Global/globalstyles';
import {Back, Star} from '../../Assets/icons';
import {backCalender} from '../../Assets/TabSvgs';
import {forwardCalender} from '../../Assets/TabSvgs';
import {SvgXml} from 'react-native-svg';
import {TimeData} from '../../Global/Data';

import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: [],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'fr';
const Appointment1 = ({navigation,route}) => {
     const {Doctor} = route.params;
     const {id} = route.params;

  const [selected, setSelected] = useState('');

  const [indexCheck, setIndexCheck] = useState('0');

  const [List, setList] = useState([{}]);

  useEffect(() => {
    console.log();
    setList(TimeData);
  });
  return (
    <View style={styles.Container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress = {()=>{
          navigation.goBack();
        }}>
          <Back
            width={45}
            height={46}
            style={{marginTop: '5%', marginHorizontal: '5%'}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'NunitoSans_10pt-Bold',
            marginTop: '8%',
            marginLeft: '13%',
          }}>
          Appointment
        </Text>
      </View>
      {/* <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <SvgXml xml={backCalender} style={{marginTop: 40}}></SvgXml>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 34,
            fontFamily: 'NunitoSans_10pt-Bold',
            marginTop: '8%',
            marginLeft: '15%',
            marginRight: '15%',
          }}>
          Mars
        </Text>
        <SvgXml xml={forwardCalender} style={{marginTop: 40}}></SvgXml>
      </View> */}

      <Calendar
        enableSwipeMonths
        style={{
          height: 340,
          width: 320,
          alignSelf: 'center',
          backgroundColor: 'transparent',
        }}
        theme={{
          monthTextColor: 'black',
          textMonthFontSize: 30,
          arrowColor: 'rgba(74, 84, 94, 1)',
          calendarBackground: 'transparent',
          dayTextColor: 'rgba(14, 16, 18, 1)',
          textInactiveColor: 'green',
          textDayFontSize: 17,
          textDayFontWeight: 'bold',
          textDisabledColor: 'rgba(14, 16, 18, 1)',
          dotColor: 'red',
          textSectionTitleColor: 'transparent',
          todayTextColor: 'white',
          todayBackgroundColor: 'rgba(28, 107, 164, 1)',
          todayDotColor: 'white',
          selectedDayBackgroundColor: 'red',
        }}
        markedDates={{
          [selected]: {
            selected: true,
            selectedTextColor: 'red',
          },
        }}
      />

      <View
        style={{
          backgroundColor: 'rgba(28, 107, 164, 1)',
          height: '100%',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          marginTop: -25,
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            marginLeft: 10,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 24,
              marginTop: 10,
              marginLeft: 10,
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
            Time
          </Text>

          <View style={{height: 200}}>
            <FlatList
              numColumns={3}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={true}
              alwaysBounceVertical
              data={List}
              extraData={indexCheck}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    setIndexCheck(item.id);
                  }}>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: 'space-between',
                      marginLeft: 12,
                    }}>
                    <View
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardSelected}
                          : {...styles.smallCard}
                      }>
                      <View>
                        <Text
                          style={
                            indexCheck === item.id
                              ? {...styles.smallCardTextSelected}
                              : {...styles.smallCardText}
                          }>
                          {item.time}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Appointment2', {Doctor: Doctor,id:id});
            }}
            style={{
              backgroundColor: 'white',
              height: 50,
              width: '87%',
              borderRadius: 14,
              marginRight: 11,
              marginTop: 10,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'rgba(28, 107, 164, 1)',
                fontSize: 17,
                marginTop: 12,
                marginLeft: 10,
                fontFamily: 'NunitoSans_10pt-Medium',
              }}>
              Confirm Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Appointment1;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
  },
  smallCard: {
    borderColor: 'rgba(190, 202, 218, 1)',
    borderWidth: 1,
    height: 40,
    width: 100,
    borderRadius: 10,
  },
  smallCardText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 6,
    fontFamily: 'NunitoSans_10pt-Medium',
  },
  smallCardSelected: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 40,
    width: 100,
    borderRadius: 10,
  },
  smallCardTextSelected: {
    color: 'rgba(28, 107, 164, 1)',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 6,
    fontFamily: 'NunitoSans_10pt-Medium',
  },
});
