import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../Global/globalstyles';
import {notificationData} from '../../Global/Data';
import NotificationCard from '../../Components/NotificationCard';
const NotificationPatient = () => {
  const [List, setList] = useState([{}]);
  useEffect(() => {
    console.log();
    setList(notificationData);

    console.log('>>>', List);
  });
  return (
    <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
      <View
        style={{
          width: '85%',
          alignSelf: 'center',
          height: '92%',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 22,
            color: 'rgba(14, 16, 18, 1)',

            fontFamily: 'NunitoSans_10pt-Bold',
          }}>
          NotificationPP
        </Text>
        <FlatList
          alwaysBounceVertical
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          data={List}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <NotificationCard
              id={item.id}
              svg={item.svg}
              heading={item.heading}
              subtitle={item.subtitle}
            />
          )}
        />
      </View>
    </View>
  );
};

export default NotificationPatient;

const styles = StyleSheet.create({});
