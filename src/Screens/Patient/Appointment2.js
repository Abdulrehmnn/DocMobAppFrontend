import React, { useState, useEffect, useRef ,useCallback} from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, Modal,Image, KeyboardAvoidingView, StyleSheet, TouchableHighlight } from 'react-native';
import {colors} from '../../Global/globalstyles';
import {Back, DoctorImg, Star, Clock} from '../../Assets/icons';
import {SvgXml} from 'react-native-svg';
import {GiftedChat,InputToolbar,Composer} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import {scheduleData} from '../../Global/Data';
import {
  bacbggreay,
  callIcon,
  linkSvgIcon,
  sendSvgIcon,
  videBg,
  videoIcon,
} from '../../Assets/TabSvgs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DocAppointment from '../../Components/DocAppointment';
const Appointment2 = ({navigation,route}) => {
   const {Doctor} = route.params;
   const image = Doctor.image;
   const name = Doctor.name;
   console.log('nameeee', route.params.id);
   console.log('Doct Id', Doctor.name);
   const review = Doctor.review;
   const review2 = Doctor.review2;
   const designation = Doctor.designation;
   const [List, setList] = useState([{}]);
   const [modalVisible, setModalVisible] = useState(false);
   const [isCalling, setIsCalling] = useState(false);
   const [isCallAccepted, setIsCallAccepted] = useState(false);
   const [messages, setMessages] = useState([]);
   const localStream = useRef(null);
   const remoteStream = useRef(null);
   const peerConnection = useRef(null);
   const handleCallButton = async () => {
      try {
        setIsCalling(true);

        localStream.current = await mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        peerConnection.current.ontrack = event => {
          remoteStream.current = event.streams[0];
          setIsCallAccepted(true); // Automatically accept the call when the remote stream arrives
          // Update the UI to display the remote stream
        };
        peerConnection.current = new RTCPeerConnection({
          iceServers: [{urls: 'stun:stun.l.google.com:19302'}],
        });

        localStream.current.getTracks().forEach(track => {
          peerConnection.current.addTrack(track, localStream.current);
        });

        peerConnection.current.ontrack = event => {
          remoteStream.current = event.streams[0];
          // Handle remote stream, e.g., display in a video element
          setIsCallAccepted(true); // Automatically accept the call when the remote stream arrives
        };

        const offer = await peerConnection.current.createOffer();
        await peerConnection.current.setLocalDescription(offer);
        // Send offer to the other user
      } catch (error) {
        console.error('Error creating offer:', error);
      }
   };

  const handleHangUp = () => {
    setIsCalling(false);
    setIsCallAccepted(false);
    peerConnection.current.close();
    remoteStream.current = null;
    // Perform any additional cleanup, state updates, etc.
  };
  useEffect(() => {
    console.log();
    setList(scheduleData);
    console.log('>>>', List);
  });

;

  //Message Part 
    useEffect(() => {
        const MessagesDataFireStore = firestore()
          .collection('chats')
          .doc(route.params.id + Doctor.name)
          .collection('messages')
          .orderBy('createdAt', 'desc')
          .onSnapshot(snapshot => {
            const allMessages = snapshot.docs.map(doc => ({
              id: doc.id,

              ...doc.data(),
              createdAt: doc._data.createdAt,
            }));
            setMessages(allMessages);
          });
        return () => MessagesDataFireStore();
    }, []);
     const renderComposer = props => {
       const customStyle = {
         color: 'rgba(26, 69, 99, 1)',
           fontSize: 16,
            fontFamily: 'NunitoSans_10pt-Medium',
       };
       return (
         <Composer
           {...props}
           textInputStyle={[props.textInputStyle, customStyle]}
         />
       );
     };
      const renderInputToolbar = props => (
        <InputToolbar
          {...props}
          containerStyle={{backgroundColor: 'rgba(255, 255, 255, 1)', alignSelf:"center",marginLeft:"1%", height: 60, paddingTop:10,borderRadius:12, paddingLeft:30}} // Customize the toolbar background color
        />
      );
    const onSend = useCallback((messages = []) => {
       console.log("1111111111111111111111");

      const msg = messages[0];
      
      const myMsg = {
        ...msg,
        sendBy: route.params.id,
        sendTo: Doctor.name,
        createdAt: Date.parse(msg.createdAt),
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, myMsg),
      );
      firestore()
        .collection('chats')
        .doc('' + route.params.id + Doctor.name)
        .collection('messages')
        .add(myMsg);
      firestore()
        .collection('chats')
        .doc('' + Doctor.name + route.params.id)
        .collection('messages')
        .add(myMsg);
    }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.pageBackground}}>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={{height: '12%'}}>
          <View
            style={{
              backgroundColor: 'rgba(220, 237, 249, 1)',
              height: '100%',
              width: '100%',
            }}>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                height: 85,
                width: '100%',
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                flexDirection: 'row',
                zIndex: 1,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <SvgXml
                  xml={bacbggreay}
                  style={{marginTop: 20, marginLeft: '7%'}}></SvgXml>
              </TouchableOpacity>

              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    color: 'black',
                    marginTop: 15,
                    fontSize: 16,
                    borderRadius: 100,
                    height: 50,
                    width: 50,
                    fontFamily: 'NunitoSans_10pt-Light',
                  }}
                  // source={{
                  //   uri: image,
                  // }}
                  source={{
                    uri: image,
                  }}
                />

                <View style={{marginRight: 40, marginLeft: 20}}>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 20,
                      marginLeft: 10,
                      fontSize: 16,
                      fontFamily: 'NunitoSans_10pt-Bold',
                    }}>
                    {name}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: 'black',
                        marginLeft: 10,
                        fontSize: 13,
                        fontFamily: 'NunitoSans_10pt-Light',
                      }}>
                      Online
                    </Text>
                    <View
                      style={{
                        marginLeft: 5,
                        height: 6,
                        width: 6,
                        marginTop: 6,
                        backgroundColor: 'rgba(39, 174, 96, 1)',
                        borderRadius: 100,
                      }}></View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleCallButton}
                  // onPress={() => {
                  //   navigation.navigate('VoiceCallPatient');
                  // }}
                >
                  <SvgXml xml={callIcon} style={{marginTop: 20}}></SvgXml>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('VideoCallPatient');
                  }}
                  style={{marginLeft: 10}}>
                  <SvgXml xml={videBg} style={{marginTop: 20}}></SvgXml>
                  <SvgXml
                    xml={videoIcon}
                    style={{marginLeft: 13, marginTop: -28}}></SvgXml>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <SvgXml
            xml={linkSvgIcon}
            style={{marginTop: 20, marginLeft: '5%'}}></SvgXml> */}

          {/* <SvgXml
            xml={sendSvgIcon}
            style={{marginTop: 8, marginLeft: '47%'}}></SvgXml> */}
        </View>
        <View style={{flex: 2, backgroundColor: 'rgba(220, 237, 249, 1)'}}>
          <GiftedChat
            messages={messages}
            placeholder="Enter chat..."
            onSend={messages => onSend(messages)}
            user={{
              // _id: 1,
              _id: route.params.id,
            }}
            renderComposer={renderComposer}
            renderInputToolbar={renderInputToolbar}
            // renderInputText={renderInputText}
            textInputProps={{autoCorrect: false}} // Example of additional text input props
          />
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Back
          width={50}
          height={50}
          style={{marginTop: '5%', marginHorizontal: '5%'}}
        />
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        {/* <DoctorImg width={110} height={110} style={{marginTop: '1%'}} /> */}
        <Image
          source={{uri: image}}
          style={{
            width: 110,
            height: 110,
            marginTop: '1%',
            borderRadius: 100,
          }}></Image>
        <Text
          style={{
            fontSize: 22,
            color: 'rgba(14, 16, 18, 1)',
            marginTop: '4%',
            fontFamily: 'NunitoSans_10pt-Bold',
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'rgba(123, 141, 158, 1)',
            marginTop: '1%',
            fontFamily: 'NunitoSans_10pt-Medium',
          }}>
          {review}
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
            {review2}
          </Text>
          <Text
            style={{
              fontFamily: 'NunitoSans_7pt-Light',
              fontSize: 14,
              marginTop: 2,
              marginHorizontal: 2,
              color: '#4A545E',
            }}>
            {designation}
          </Text>
        </View>
        <View style={{width: '85%', marginTop: 10}}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder="Write down your symptoms..."
            placeholderTextColor={'rgba(123, 141, 158, 1)'}
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
            setModalVisible(true);
          }}
          style={styles.btnShape}>
          <Text style={styles.btnText}>CONNECT NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Appointment2;

const styles = StyleSheet.create({
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
    // alignSelf: 'center',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 28,
    // height: 157,
    paddingLeft: 25,
    paddingTop: -30,
    paddingBottom:80,
    textAlign :"auto",
    color: 'rgba(26, 69, 99, 1)',
    fontSize: 15,
    fontFamily: 'NunitoSans_10pt_Light',
  },
  key: {
    flex: 3,
  },
});
