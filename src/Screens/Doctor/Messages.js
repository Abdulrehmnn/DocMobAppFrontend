import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,

  TextInput,
  FlatList, Modal,TouchableHighlight
} from 'react-native';
import React ,{useState,useEffect}from 'react';
import {colors} from '../../Global/globalstyles';
import {SvgXml} from 'react-native-svg';
import {searchIcon} from '../../Assets/PharmacyComp';
import {filterIcon} from '../../Assets/PharmacyComp';
import PatientCard from '../../Components/PatientCard';
import {chatData} from '../../Global/Data';

 





;
const Messages = ({navigation}) => {
   const [modalVisible, setModalVisible] = useState(false);
   const [List, setList] = useState([{}]);
   const [List2, setList2] = useState([{}]);
   useEffect(() => {
     setList(chatData);
     console.log('>>>', List);
   });
  return (
    <View style={styles.Container}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 17,
          marginTop: 30,
          color: 'rgba(14, 16, 18, 1)',
          fontFamily: 'NunitoSans_10pt-Bold',
        }}>
        Messages
      </Text>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        
      </Modal>

      <View style={{marginTop: '6%'}}>
        <TextInput
          placeholderTextColor={'rgba(138, 160, 188, 1)'}
          placeholder="Looking for a doctor..."
          style={styles.TextInput}></TextInput>
        <SvgXml
          xml={searchIcon}
          style={{marginTop: -40, marginLeft: '10%'}}></SvgXml>
        <TouchableOpacity>
          <SvgXml
            xml={filterIcon}
            style={{marginTop: -22, marginLeft: '80%'}}></SvgXml>
        </TouchableOpacity>
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
            marginTop: 30,
            color: 'rgba(14, 16, 18, 1)',
            fontFamily: 'NunitoSans_10pt-SemiBold',
          }}>
          List of Patients
        </Text>
        <Text
          style={{
            marginLeft: '9%',
            fontSize: 14,
            marginTop: 30,
            color: 'rgba(28, 107, 164, 1)',
            fontFamily: 'NunitoSans_10pt-Light',
          }}>
          See all
        </Text>
      </View>
      <FlatList
        alwaysBounceVertical
        alwaysBounceHorizontal
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        data={List}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TextMessage")
            }}>
            <PatientCard
              id={item.id}
              image={item?.image}
              name={item.name}
              message={item.message}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Messages;

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
});
