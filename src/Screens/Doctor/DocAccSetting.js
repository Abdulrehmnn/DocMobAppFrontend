import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../Global/globalstyles';
import {Back2, Doctor2} from '../../Assets/icons';

const DocAccSetting = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.pageBackground2}}>
      <TouchableOpacity onPress ={()=>{
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

      <View style={{marginTop: '15%', marginHorizontal: '5%'}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
              marginTop: 7,
              marginRight: 8,
            }}>
            Full Name :
          </Text>
          <TextInput
            theme={{
              colors: {
                text: 'rgba(28, 107, 164, 1)',
                primary: 'rgba(28, 107, 164, 1)',
              },
            }}
            underlineColor="transparent"
            style={styles.TextInput}></TextInput>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: '4%',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
              marginTop: 7,
              marginRight: 8,
            }}>
            Address :
          </Text>
          <TextInput
            theme={{
              colors: {
                text: 'rgba(28, 107, 164, 1)',
                primary: 'rgba(28, 107, 164, 1)',
              },
            }}
            underlineColor="transparent"
            style={styles.TextInput}></TextInput>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'start',
          marginTop: '4%',
          marginHorizontal: '5%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
            marginTop: 7,
            marginRight: 8,
          }}>
          Bio :
        </Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          theme={{
            colors: {
              text: 'rgba(28, 107, 164, 1)',
              primary: 'rgba(28, 107, 164, 1)',
            },
          }}
          underlineColor="transparent"
          style={styles.TextInput1}></TextInput>
      </View>

      <View style={{marginTop: '10%', marginHorizontal: '5%'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
            marginTop: 7,
            marginRight: 8,
          }}>
          Verify that you are a Doctor :
        </Text>
        <View
          style={{
            height: '35%',
            width: '80%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
          }}></View>

        <View style={styles.bottomLine}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: '35%',
              height: '80%',
              borderRadius: 20,
              ...Platform.select({
                ios: {
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.6,
                  shadowRadius: 2,
                },
                android: {
                  elevation: 4,
                },
              }),
            }}>
            <Text
              style={{
                color: '#00CA20',
                textAlign: 'center',
                fontSize: 14,
                fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
                marginTop: 7,
              }}>
              Save{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF0000',
              width: '50%',
              height: '80%',
              borderRadius: 20,
              ...Platform.select({
                ios: {
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.6,
                  shadowRadius: 2,
                },
                android: {
                  elevation: 4,
                },
              }),
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 14,
                fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
                marginTop: 7,
              }}>
              Delete Account{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DocAccSetting;

const styles = StyleSheet.create({
  bottomLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '13%',
    marginBottom: '10%',
    height: '10%',
    // borderRadius:20,
  },
  TextInput: {
    alignSelf: 'center',
    width: '60%',
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 37,
    paddingLeft: 5,
    paddingTop: 5,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  TextInput1: {
    alignSelf: 'center',
    width: '88%',
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 97,
    paddingLeft: 5,
    paddingTop: 5,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
});
