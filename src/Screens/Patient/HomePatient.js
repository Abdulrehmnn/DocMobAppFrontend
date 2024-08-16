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
  Modal,
  TouchableHighlight,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../Global/globalstyles';
import {SvgXml} from 'react-native-svg';
import {PharmacyIcon} from '../../Assets/PharmacyComp';
import {searchIcon} from '../../Assets/PharmacyComp';
import {filterIcon} from '../../Assets/PharmacyComp';
import {userIcon} from '../../Assets/PharmacyComp';
import {reportIcon} from '../../Assets/PharmacyComp';
import AppointmentCard from '../../Components/AppointmentCard';
import {dotsIcon} from '../../Assets/TabSvgs';
import {appointmentData, scheduleData} from '../../Global/Data';
import {useIsFocused} from '@react-navigation/native';
import {backbgWhiteIcon} from '../../Assets/TabSvgs';
import {locationIcon} from '../../Assets/TabSvgs';
import {pharmacyData} from '../../Global/Data';
import PharmacyCard from '../../Components/PharmacyCard';
import {fileIcon} from '../../Assets/TabSvgs';
import {sendZipIcon} from '../../Assets/TabSvgs';
import {Back, DoctorImg, Star, Clock} from '../../Assets/icons';

import {
  Back2,
  Doctor2,
  Settings,
  Fb,
  Vector,
  Language,
  Compass,
  Log,
} from '../../Assets/icons';
import ProfileComponent from '../../Components/ProfileComponent';
import PatientCard from '../../Components/PatientCard';
import {DoctorData} from '../../Global/Data';
import DoctorCard from '../../Components/DoctorCard';
import OnlineDoctorCard from '../../Components/OnlineDoctorCard';
// import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePatient = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [List2, setList2] = useState([{}]);
  const [List3, setList3] = useState([{}]);
  const [init, setInit] = useState();

  const [indexCheck2, setIndexCheck2] = useState(init);
  const [List, setList] = useState([{}]);
  const [List4, setList4] = useState([{}]);
  const logout = async () => {
    try {
      // Clear user authentication data from AsyncStorage
      await AsyncStorage.removeItem('USERID');
      navigation.navigate("LogInPatient");
      // You can also clear other user-related data if needed

      // Redirect the user to the login screen or any other appropriate screen
      // For example, if you're using React Navigation:
      // navigation.navigate('Login');
    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };

 

  useEffect(() => {
    const AppointmentDataFireStore = firestore()
      .collection('appointments')
      .onSnapshot(
        snapshot => {
          const appointmentsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setList(appointmentsData);

          if (appointmentsData.length > 0) {
            console.log('', appointmentsData[0].id);
            setInit(appointmentsData[0].id);
          }
        },
        error => {
          console.error('Error fetching appointments data:', error);
          // Handle the error here, such as showing an error message to the user
        },
      );

    // Return a cleanup function to unsubscribe the listener
    return () => AppointmentDataFireStore();

  }, []);
  useEffect(() => {
    const DoctorsDataFireStore = firestore()
      .collection('doctors')
      .onSnapshot(
        snapshot => {
          const doctorsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setList4(doctorsData);
          console.log(doctorsData);
        },
        error => {
          console.error('Error fetching doctors data:', error);
          // Handle the error here, such as showing an error message to the user
        },
      );

    // Return a cleanup function to unsubscribe the listener
    return () => DoctorsDataFireStore(); // This should be changed

  
  }, []);
  useEffect(() => {
    const PharmacyDataFireStore = firestore()
      .collection('pharmacies')
      .onSnapshot(
        snapshot => {
          const pharmacyData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setList2(pharmacyData);
        },
        error => {
          console.error('Error fetching pharmacy data:', error);
          // Handle the error here, such as showing an error message to the user
        },
      );
    // Return a cleanup function to unsubscribe the listener
    return () => PharmacyDataFireStore(); // Call the function to unsubscribe
  });

  return (
    <View style={styles.Container}>
      <Modal animationType="fade" transparent={false} visible={modalVisible2}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.pageBackground2,
            height: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible2(false);
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
                setModalVisible5(true);
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
            <TouchableOpacity onPress={logout}>
              <Text
                style={{
                  color: 'white',
                  marginLeft: 10,
                  fontSize: 17,
                  fontFamily: 'NunitoSans_10pt-Bold',
                }}>
                LogOut
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType="fade" transparent={false} visible={modalVisible3}>
        <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible3(false);
            }}>
            <Back
              width={50}
              height={50}
              style={{marginTop: '5%', marginHorizontal: 10}}
            />
          </TouchableOpacity>
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
            <View style={{flexDirection: 'row'}}>
              <Star width={17} height={17} style={{marginLeft: 5}} />
              <Text
                style={{
                  fontFamily: 'NunitoSans_10pt-Bold',
                  fontSize: 16,

                  marginHorizontal: 7,
                  color: 'rgba(74, 84, 94, 1)',
                }}>
                4.7
              </Text>
              <Text
                style={{
                  fontFamily: 'NunitoSans_7pt-Light',
                  fontSize: 14,
                  marginTop: 2,
                  marginHorizontal: 2,
                  color: '#4A545E',
                }}>
                17 reviews
              </Text>
            </View>
            <View style={{width: '85%', marginTop: 10}}>
              <TextInput
                multiline={true}
                numberOfLines={7}
                theme={{
                  colors: {
                    text: 'rgba(28, 107, 164, 1)',
                    primary: 'rgba(28, 107, 164, 1)',
                  },
                }}
                underlineColor="transparent"
                style={styles.TextInput1}></TextInput>
            </View>
          </View>
          <View style={{width: '87%', alignSelf: 'center', marginTop: '12%'}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors.white,
                borderRadius: 28,
                width: '100%',
                height: 90,
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <View></View>
              <View
                style={{
                  backgroundColor: 'rgba(220, 237, 249, 1)',
                  height: 65,
                  width: '25%',
                  borderRadius: 20,
                  marginLeft: '3%',
                  marginTop: 13,
                }}>
                <Clock
                  width={35}
                  height={35}
                  style={{marginVertical: '20%', marginHorizontal: '25%'}}
                />
              </View>
              <View style={{marginLeft: '6%', marginTop: '6%'}}>
                <Text
                  style={{
                    fontFamily: 'NunitoSans_7pt-Light',
                    fontSize: 14,
                    color: 'rgba(14, 16, 18, 1)',
                  }}>
                  {/* {name} */}
                  Availability
                </Text>
                <Text
                  style={{
                    fontFamily: 'NunitoSans_10pt-Bold',
                    fontSize: 17,
                    marginTop: 10,
                    color: 'rgba(14, 16, 18, 1)',
                  }}>
                  6h - 17h
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Appointment1');
              }}
              style={styles.btnShape}>
              <Text style={styles.btnText}>CONNECT NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={false} visible={modalVisible4}>
        <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible4(false);
              }}>
              <Back
                width={45}
                height={46}
                style={{marginHorizontal: 18, marginTop: 18}}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 27,
                fontFamily: 'NunitoSans_10pt-Bold',
                marginTop: '6%',
              }}>
              Doctors
            </Text>
          </View>
          <View style={{marginTop: '6%'}}>
            <TextInput
              placeholderTextColor={'rgba(138, 160, 188, 1)'}
              placeholder="Looking for a Doctor..."
              style={styles.TextInputDoc}></TextInput>
            <SvgXml
              xml={searchIcon}
              style={{marginTop: -40, marginLeft: '10%'}}></SvgXml>
            <TouchableOpacity>
              <SvgXml
                xml={filterIcon}
                style={{marginTop: -22, marginLeft: '80%'}}></SvgXml>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginLeft: '9%',
              fontSize: 17,
              marginTop: 30,
              color: 'rgba(14, 16, 18, 1)',
              fontFamily: 'NunitoSans_10pt-SemiBold',
            }}>
            Live Doctors
          </Text>

          <View style={{width: 300, marginLeft: 10}}>
            <FlatList
              horizontal
              keyboardShouldPersistTaps="handled"
              showsHorizontalScrollIndicator={false}
              data={List4}
              keyExtractor={item => item.id}
              renderItem={({item}) => <OnlineDoctorCard image={item.image} />}
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
                marginTop: 30,
                color: 'rgba(14, 16, 18, 1)',
                fontFamily: 'NunitoSans_10pt-SemiBold',
              }}>
              List of Doctors
            </Text>

            <Text
              onPress={() => {
                setModalVisible3(true);
              }}
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
            keyboardShouldPersistTaps="handled"
            showsHorizontalScrollIndicator={false}
            data={List4}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DoctorDetails', {Doc: item});
                }}>
                <DoctorCard
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  designation={item.designation}
                  review={item.review}
                  review2={item.review2}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>

      <Modal animationType="fade" transparent={false} visible={modalVisible5}>
        <View style={{flex: 1, backgroundColor: colors.pageBackground2}}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible5(false);
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
                style={styles.TextInputSetting}></TextInput>
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
                style={styles.TextInputSetting}></TextInput>
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
              style={styles.TextInputSetting2}></TextInput>
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
                  Save
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
                  Delete Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View
          style={{
            backgroundColor: 'rgba(220, 237, 249, 1)',
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(220, 237, 249, 1)',
              height: 85,
              width: '100%',
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              flexDirection: 'row',
              zIndex: 1,
            }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <SvgXml
                xml={backbgWhiteIcon}
                style={{marginTop: 20, marginLeft: '10%'}}></SvgXml>
            </TouchableOpacity>
            <SvgXml
              xml={locationIcon}
              style={{marginTop: 30, marginLeft: '10%'}}></SvgXml>

            <View>
              <Text
                style={{
                  color: 'black',
                  marginTop: 30,
                  marginLeft: 10,
                  fontSize: 16,
                  fontFamily: 'NunitoSans_10pt-Light',
                }}>
                Name Patient
              </Text>
            </View>
          </View>

          {/* Below portion */}
          <View>
            <Text
              style={{
                marginTop: 20,
                alignSelf: 'center',
                fontFamily: 'NunitoSans_10pt-Bold',
                fontSize: 17,
                color: 'rgba(14, 16, 18, 1)',
              }}>
              Nearby pharmacies
            </Text>

            <FlatList
              horizontal
              alwaysBounceVertical
              alwaysBounceHorizontal
              keyboardShouldPersistTaps="handled"
              showsHorizontalScrollIndicator={false}
              data={List2}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <PharmacyCard
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    distance={item.distance}
                    review={item.review}
                    total_reviews={item.total_reviews}
                  />
                </TouchableOpacity>
              )}
            />
          </View>

          <Text
            style={{
              fontFamily: 'NunitoSans_10pt-Bold',
              alignSelf: 'center',
              fontSize: 24,
              color: 'rgba(14, 16, 18, 1)',
              marginTop: 7,
            }}>
            Send Prescription
          </Text>
          <Text
            style={{
              fontFamily: 'NunitoSans_10pt-Light',
              textAlign: 'center',
              marginTop: 10,
              width: '75%',
              alignSelf: 'center',

              fontSize: 14,
              color: 'rgba(74, 84, 94, 1)',
            }}>
            We will show the pharmacies that have all the medicines you are
            looking for
          </Text>
          <View
            style={{
              marginTop: 40,
              width: '75%',
              alignSelf: 'center',
              height: 170,
              fontSize: 14,
              borderRadius: 24,
              backgroundColor: 'rgba(255, 255, 255, 1)',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '75%',
                marginLeft: 35,
                marginTop: 5,
              }}>
              <View
                style={{
                  marginTop: 30,
                  width: 80,
                  height: 80,
                  fontSize: 14,
                  borderRadius: 24,
                  backgroundColor: 'rgba(107, 134, 179, 0.25)',
                }}>
                <SvgXml
                  xml={fileIcon}
                  style={{marginTop: 25, marginLeft: '35%'}}></SvgXml>
              </View>

              <View
                style={{
                  marginTop: 30,
                  width: 80,
                  height: 80,
                  fontSize: 14,
                  borderRadius: 24,
                  backgroundColor: 'rgba(107, 134, 179, 0.25)',
                }}>
                <SvgXml
                  xml={sendZipIcon}
                  style={{marginTop: 25, marginLeft: '35%'}}></SvgXml>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '65%',
                marginLeft: 40,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'NunitoSans_10pt-Light',
                  color: 'rgba(14, 16, 18, 1)',
                }}>
                Share Link
              </Text>
              <Text
                style={{
                  fontFamily: 'NunitoSans_10pt-Light',
                  color: 'rgba(14, 16, 18, 1)',
                }}>
                Send
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', height: 80}}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible2(true);
            }}>
            <Image
              style={{height: 50, width: 50, borderRadius: 50, marginTop: 16}}
              source={{
                uri: 'https://static01.nyt.com/images/2023/03/14/science/14SCI-Span-illo/14SCI-Span-illo-superJumbo.jpg',
              }}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              height: 40,
              width: '40%',
              marginLeft: 20,
              borderRadius: 21,
              marginTop: '7%',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12,
                alignSelf: 'center',
                marginLeft: '15%',
                fontFamily: 'NunitoSans_10pt-Bold',
              }}>
              Add your Card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: '6%'}}>
        <TextInput
          placeholderTextColor={'rgba(138, 160, 188, 1)'}
          placeholder="Medical Research..."
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
          justifyContent: 'space-betweens',
          width: '100%',
          marginLeft: '10%',
          marginTop: '15%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DoctorSearch');
          }}
          style={[styles.View1, {marginRight: '5%'}]}>
          <SvgXml
            xml={userIcon}
            style={{marginLeft: -10, marginTop: 5}}></SvgXml>
          <Text
            style={{
              color: 'rgba(40, 96, 143, 1)',
              marginTop: '6%',
              alignSelf: 'center',
              marginLeft: '20%',
              width: 120,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Patients
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ReportStack');
          }}
          style={[styles.View1, {marginRight: '10%'}]}>
          <SvgXml style={{marginLeft: -10}} xml={reportIcon}></SvgXml>
          <Text
            style={{
              color: 'rgba(255, 63, 109, 1)',
              marginTop: '10%',
              alignSelf: 'center',
              marginLeft: '20%',
              width: 120,
              fontFamily: 'NunitoSans_10pt-Medium',
            }}>
            Reports
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <SvgXml
          style={{alignSelf: 'center', marginTop: 10}}
          xml={PharmacyIcon}></SvgXml>
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: '9%',
          fontSize: 17,
          color: 'rgba(28, 107, 164, 1)',
          fontFamily: 'NunitoSans_10pt-SemiBold',
        }}>
        Upcoming appointment
      </Text>
      {/* <ScrollView>
      {List.map(item => (
        <AppointmentCard
          id={item.id}
          date={item.date}
          day={item.day}
          time={item.time}
          name={item.name}
          disease={item.disease}
        />
      ))}
    </ScrollView> */}

      <FlatList
        horizontal
        alwaysBounceVertical
        alwaysBounceHorizontal
        data={List}
        // keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              setIndexCheck2(item.id);
            }}>
            <View style={{marginLeft: 20}}>
              <View
                style={
                  indexCheck2 === item.id
                    ? {...styles.bigCardSelected}
                    : {...styles.bigCard}
                }>
                <View style={{marginLeft: 30, flexDirection: 'row'}}>
                  <View
                    style={
                      indexCheck2 === item.id
                        ? {...styles.bgDateDaySelected}
                        : {...styles.bgDateDay}
                    }>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.dateValSelected}
                          : {...styles.dateVal}
                      }>
                      {item.date}
                    </Text>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.dayValSelected}
                          : {...styles.dayVal}
                      }>
                      {item.day}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={
                        indexCheck2 === item.id
                          ? {...styles.bigCardTextSelected2}
                          : {...styles.bigCardText2}
                      }>
                      {item.time}
                    </Text>
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
                      {item.disease}
                    </Text>
                  </View>
                  <View>
                    <SvgXml
                      xml={dotsIcon}
                      style={
                        indexCheck2 === item.id
                          ? {...styles.dotIconSelected}
                          : {...styles.dotIcon}
                      }></SvgXml>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
          // <AppointmentCard
          //   id={item.id}
          //   date={item.date}
          //   day={item.day}
          //   time={item.time}
          //   name={item.name}
          //   disease={item.disease}
          // />
        )}
      />
    </View>
  );
};

export default HomePatient;

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

  bigCard: {
    // flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 28,
    width: 290,
    height: 120,
    marginTop: 20,
  },
  bigCardSelected: {
    backgroundColor: 'rgba(28, 107, 164, 1)',
    borderRadius: 28,
    width: 280,
    height: 120,
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
    marginLeft: '40%',
  },
  dotIcon: {
    marginTop: 10,
    marginLeft: '18%',
    color: 'black',
  },
  dateValSelected: {
    fontFamily: 'NunitoSans_10pt-Bold',
    alignSelf: 'center',
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 20,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  dateVal: {
    fontFamily: 'NunitoSans_10pt-Bold',
    alignSelf: 'center',
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 20,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  dayValSelected: {
    fontFamily: 'NunitoSans_10pt-Medium',
    alignSelf: 'center',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 7,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  dayVal: {
    fontFamily: 'NunitoSans_10pt-Medium',
    alignSelf: 'center',
    fontSize: 14,
    color: 'white',
    marginTop: 7,
    marginRight: '35%',
    marginLeft: '50%',
    width: 40,
  },
  bgDateDaySelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    height: 100,
    width: 80,
    borderRadius: 31,
    marginTop: 10,
    marginRight: 20,
    marginLeft: -10,
  },
  bgDateDay: {
    backgroundColor: 'rgba(224, 159, 31, 1)',
    height: 100,
    width: 80,
    borderRadius: 31,
    marginTop: 10,
    marginRight: 20,
    marginLeft: -10,
  },
  btnShape: {
    height: 47,
    width: '95%',
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
  TextInput1: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 28,
    height: 157,
    paddingLeft: 5,
    paddingTop: 5,
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_SemiCondensed-Black',
  },
  TextInputDoc: {
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
  bottomLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '13%',
    marginBottom: '10%',
    height: '10%',
    // borderRadius:20,
  },
  TextInputSetting: {
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
  TextInputSetting2: {
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
