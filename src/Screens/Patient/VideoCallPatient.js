import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Call, Mic, Video} from '../../Assets/icons';
import LinearGradient from 'react-native-linear-gradient';
const VideoCallPatient = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(28, 107, 164, 0.00)', '#1C6BA4']}
        style={styles.background}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.mainContent}>
          <Text>Main Content</Text>
        </View>
        <View
          style={{
            width: '30%',
            height: '20%',
            backgroundColor: 'white',
            borderRadius: 30,
            alignSelf: 'flex-end',
            marginRight: 10,
            marginBottom: 10,
          }}></View>
        <View style={styles.bottomElement}>
          <Text style={{color: 'white', fontSize: 16, marginBottom: 5}}>
            00:30:00
          </Text>
          <View style={{width: '50%', flexDirection: 'row'}}>
            <TouchableOpacity style={styles.button}>
              <Mic width={20} height={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Call width={40} height={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Video width={20} height={20} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomElement: {
    backgroundColor: '#1C6BA4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    height: '20%',
    zIndex: 999,
    width: '100%',
  },
  button: {
    marginTop: '6%',
    marginRight: '8%',
    width: 40,
    height: 40,
    borderRadius: 20, // To make it a circle, set half of the width or height
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: 60,
    height: 60,
    marginRight: '8%',
    borderRadius: 30, // To make it a circle, set half of the width or height
    backgroundColor: '#F73859',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoCallPatient;
