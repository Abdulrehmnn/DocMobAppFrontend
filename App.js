import 'react-native-gesture-handler';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Root from './src/Navigation/Root';
import VideoCall1 from './src/Screens/Doctor/VideoCall1';
import VoiceCall from './src/Screens/Doctor/VoiceCall';
import Appointment from './src/Screens/Doctor/Appointment';
import DoctorProfile from './src/Screens/Doctor/DoctorProfile';
import Messages from './src/Screens/Doctor/Messages';
import DocAccSetting from './src/Screens/Doctor/DocAccSetting';
import Schedule from './src/Screens/Doctor/Schedule';
import DoctorSearch from './src/Screens/Patient/DoctorSearch';
import DoctorProfileP from './src/Screens/Patient/ProfilePatient';
import Appointment1 from './src/Screens/Patient/Appointment1';
import Appointment2 from './src/Screens/Patient/Appointment2';
import DoctorDetails from './src/Screens/Doctor/DoctorDetails';
import TextMessagePatient from './src/Screens/Patient/TextMessagePatient';
import SendChat from './src/Screens/Patient/SendChat';
// import Messages from './src/Screens/Doctor/Messages';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="rgba(28, 107, 164, 1)"
      />
      <Root />
      {/* <TextMessagePatient /> */}
      {/* <SendChat /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
