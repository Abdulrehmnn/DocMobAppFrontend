import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../Global/globalstyles';
import {SvgXml} from 'react-native-svg';
import {searchIcon} from '../../Assets/PharmacyComp';
import {filterIcon} from '../../Assets/PharmacyComp';
import ScheduleCard from '../../Components/ScheduleCard';
import CalenderCard from '../../Components/CalenderCard';
import {scheduleData} from '../../Global/Data';
import {CalenderData} from '../../Global/Data';
import {Calendar} from '../../Assets/icons';
import {dotsIcon} from '../../Assets/TabSvgs';

const SchedulePatient = () => {
  const [List, setList] = useState([{

  }]);
  const [List2, setList2] = useState([
    {
      time: '',
      name: '',
      image:
        'https://cdn2.vectorstock.com/i/1000x1000/74/56/blue-user-icon-vector-42797456.jpg',
      message : "hello"
    },
  ]);
  const [indexCheck, setIndexCheck] = useState(0);
  const [indexCheck2, setIndexCheck2] = useState(0);

  useEffect(() => {
    console.log();
    setList(scheduleData);
    setList2(CalenderData);

    console.log('>>>', List);
  });
  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-between',
          marginHorizontal: '5%',
        }}>
        <Text
          style={{
            fontSize: 27,
            color: 'rgba(14, 16, 18, 1)',
            fontFamily: 'NunitoSans_10pt-Bold',
          }}>
          Calender Patient
        </Text>
        <Calendar style={{marginTop: 5}} />
      </View>

      <View style={{marginLeft: 10}}>
        <FlatList
          alwaysBounceVertical
          alwaysBounceHorizontal
          horizontal
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          data={List2}
          extraData={indexCheck}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            // <CalenderCard id={item.id} day={item.day} date={item.date} />
            <Pressable
              onPress={() => {
                setIndexCheck(item.id);
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
                        ? {...styles.smallCardTextSelectedDate}
                        : {...styles.smallCardTextDate}
                    }>
                    {item.date}
                  </Text>
                </View>
                <View>
                  <Text
                    style={
                      indexCheck === item.id
                        ? {...styles.smallCardTextSelected}
                        : {...styles.smallCardText}
                    }>
                    {item.day}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
      <View style={{flexDirection: 'row', marginLeft: '5%'}}></View>

      <FlatList
        alwaysBounceVertical
        alwaysBounceHorizontal
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        data={List}
        extraData={indexCheck2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              setIndexCheck2(item.id);
            }}>
            <View
              style={
                indexCheck2 === item.id
                  ? {...styles.bigCardSelected}
                  : {...styles.bigCard}
              }>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  width: 60,
                  marginTop: 25,
                  borderRadius: 22,
                  marginHorizontal: 20,
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    margin: 5,
                    borderRadius: 50,
                    marginTop: 5,
                  }}
                  source={{uri: item?.image}}
                />
              </View>

              <View>
                <View>
                  <Text
                    style={
                      indexCheck2 === item.id
                        ? {...styles.bigCardTextSelected2}
                        : {...styles.bigCardText2}
                    }>
                    {item.time}
                  </Text>
                </View>
                <Text
                  style={
                    indexCheck2 === item.id
                      ? {...styles.bigCardTextSelected}
                      : {...styles.bigCardText}
                  }>
                  {item.name}
                </Text>
                <Text
                  style={
                    indexCheck2 === item.id
                      ? {...styles.bigCardTextSelected3}
                      : {...styles.bigCardText3}
                  }>
                  {item.symptom}
                </Text>
              </View>
              <View>
                {/* style={{marginTop: 10, marginLeft: '30%'}} */}
                <SvgXml
                  xml={dotsIcon}
                  style={
                    indexCheck2 === item.id
                      ? {...styles.dotIconSelected}
                      : {...styles.dotIcon}
                  }></SvgXml>
              </View>
            </View>
          </Pressable>
          // <ScheduleCard
          //   id={item.id}
          //   image={item.image}
          //   name={item.name}
          //   time={item.time}
          //   symptom={item.symptom}
          // />
        )}
      />
    </View>
  );
};

export default SchedulePatient;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.pageBackground,
  },
  TextInput: {
    alignSelf: 'center',
    width: '87%',
    backgroundColor: 'rgba(238, 246, 252, 1)',
    borderRadius: 18,
    elevation: 1,
    height: 56,
    paddingLeft: 50,
    paddingTop: 5,
    color: 'black',
    fontSize: 14,
    fontFamily: 'NunitoSans_10pt-Medium',
  },
  View1: {
    alignSelf: 'center',
    width: '39%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    elevation: 1,
    height: 104,
    paddingLeft: 45,
    color: 'black',
    fontSize: 14,
  },
  smallCard: {
    borderRadius: 31,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    width: 85,
    marginLeft: 10,
    height: 100,
    marginTop: 10,
  },
  smallCardSelected: {
    borderRadius: 31,
    justifyContent: 'center',
    backgroundColor: 'rgba(28, 107, 164, 1)',
    alignItems: 'center',
    width: 85,
    marginTop: 10,
    height: 100,
    marginLeft: 10,
  },
  smallCardTextSelected: {
    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 7,
  },
  smallCardTextSelectedDate: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 21,
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 7,
  },
  smallCardText: {
    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 18,
    color: 'rgba(28, 107, 164, 1)',
    marginBottom: 7,
  },
  smallCardTextDate: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 21,
    color: 'rgba(28, 107, 164, 1)',
    marginBottom: 7,
  },
  bigCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 28,
    width: '90%',
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
  },
  bigCardSelected: {
    flexDirection: 'row',
    backgroundColor: 'rgba(28, 107, 164, 1)',
    borderRadius: 28,
    width: '90%',
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
  },
  bigCardTextSelected: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
  bigCardTextSelected2: {
    marginTop: 20,

    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 16,
  },
  bigCardTextSelected3: {
    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 16,
  },
  bigCardText: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 16,
    color: 'rgba(14, 16, 18, 1)',
  },
  bigCardText2: {
    marginTop: 20,
    color: 'rgba(12, 17, 21, 1)',

    fontFamily: 'NunitoSans_10pt-Light',
    fontSize: 16,
  },
  bigCardText3: {
    color: 'rgba(97, 100, 103, 1)',

    fontFamily: 'NunitoSans_10pt-Medium',
    fontSize: 16,
  },
  dotIconSelected: {
    marginTop: 10,
    marginLeft: '18%',
  },
  dotIcon: {
    marginTop: 10,
    marginLeft: '18%',
    color: 'red',
  },
});
