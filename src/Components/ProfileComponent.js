import {StyleSheet, Text, View, Switch} from 'react-native';
import {useState} from 'react';
import {Doctor2} from '../Assets/icons';
const width_proportion = '60%';
const height_proportion = '40%';

export default function ProfileComponent(props) {
  return (
    <View style={styles.row1}>
      <View style={styles.icon}>
        {props.svg ? <props.svg height={23} /> : null}
      </View>
      <View style={styles.textPart}>
        <Text style={styles.text3}>{props.title}</Text>
     
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row1: {
    marginTop: 8,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '83%',
    alignItems: 'center',
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
  },
  icon: {
    paddingTop: 5,
    width: 25,
    marginHorizontal:'7%'  },
  textPart: {
    width: width_proportion,
    // marginLeft: 10,
  },
  text3: {
    fontSize: 18,
    color: '#0E1012',
    marginTop: 6,
    fontFamily: 'NunitoSans_10pt-Bold',
    // fontWeight: '600',
  },
   

});
