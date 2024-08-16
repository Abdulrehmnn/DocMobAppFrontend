import * as React from 'react';
import {View, Text, ImageBackground,Image} from 'react-native';

function Background({children}) {
  return (
    <View style={{ flex: 1 }}>
    {/* Display the image without the ImageBackground first to check if it's valid */}
    <Image
      source={require('../assets/Images/Background.png')}
      style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}
    />

    {/* ImageBackground with resizeMode 'cover' */}
    <ImageBackground
      source={require('../assets/Images/Background.png')}
      style={{ flex: 1, resizeMode: 'cover' }}
    >
      <View style={{ flex: 1 }}>{children}</View>
    </ImageBackground>
  </View>
  );
}
export default Background;
