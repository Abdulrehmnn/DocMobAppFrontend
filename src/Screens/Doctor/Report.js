import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {colors} from '../../Global/globalstyles';
  import {SvgXml} from 'react-native-svg';
  import {searchIcon} from '../../Assets/PharmacyComp';
  import {filterIcon} from '../../Assets/PharmacyComp';
  import ScheduleCard from '../../Components/ScheduleCard';
  import WhiteCard from '../../Components/WhiteCard';
  import CalenderCard from '../../Components/CalenderCard';
  import {scheduleData} from '../../Global/Data';
  import {CalenderData} from '../../Global/Data';
  import {Dots, ReportIcon, Water, WhiteHDots,Weight,BlackDots} from '../../Assets/icons';
  
  const Report = () => {
    const [List, setList] = useState([{}]);
    const [List2, setList2] = useState([{}]);
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
            Report
          </Text>
          <Dots style={{marginTop: 5, color: 'black'}} />
        </View>
  
        <View style={styles.box1}>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.text2}>Last health report</Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'NunitoSans_10pt-Bold',
                color: 'black',
                marginTop: '10%',
              }}>
              Name Name
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'NunitoSans_10pt-Medium',
                color: 'black',
              }}>
              Conclusion and médication
            </Text>
          </View>
          <ReportIcon
            width={70}
            height={70}
            style={{marginVertical: 10, marginRight: '5%'}}
          />
        </View>
       
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
          }}>
          <Text
            style={{
              marginLeft: '9%',
              fontSize: 17,
              marginTop: 10,
              color: 'rgba(14, 16, 18, 1)',
              fontFamily: 'NunitoSans_10pt-Bold',
            }}>
           Report History
          </Text>
          <Text
            style={{
              marginLeft: '9%',
              fontSize: 14,
              marginTop: 10,
              color: 'rgba(28, 107, 164, 1)',
              fontFamily: 'NunitoSans_10pt-Light',
            }}>
            See all
          </Text>
        </View>
  
        <View style={{flexDirection: 'row', marginLeft: '5%'}}></View>
  
        <FlatList
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          data={List}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <WhiteCard
              id={item.id}
              image={item.image}
              name={item.name}
              time={item.time}
              symptom={item.symptom}
            />
          )}
        />
      </View>
    );
  };
  
  export default Report;
  
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
    box1: {
      backgroundColor: 'white',
      borderRadius: 25,
      marginHorizontal: '5%',
      marginTop: '3%',
      padding: '3%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text2: {
      color: 'rgba(74, 84, 94, 1)',
      fontSize: 14,
      fontFamily: 'NunitoSans_10pt-Medium',
    },
    box2: {
      width: '95%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // height: '19%',
      marginTop: '5%',
      marginHorizontal: '2%',
    },
    box3: {
      // height: '75%',
      width: '45%',
      backgroundColor: colors.darkred,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 25,
      padding: '3%',
      paddingLeft: '6%',
    },
    box4: {
      // height: '75%',
      width: '45%',
      backgroundColor: colors.white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 25,
      padding: '3%',
      paddingLeft: '6%',
    },
    text3: {
      color: colors.white,
      fontSize: 14,
      marginTop: 6,
    },
    text4: {
      color: colors.white,
      fontFamily: 'NunitoSans_10pt-Bold',
      fontSize: 28,
    },
    text5: {
      color: 'rgba(12, 17, 21, 1)',
      fontSize: 14,
     
    },
    text6: {
      color:'rgba(12, 17, 21, 1)',
      fontFamily: 'NunitoSans_10pt-Bold',
      fontSize: 28,
    },
  });
  