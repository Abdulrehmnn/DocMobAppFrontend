import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WishListStack from './MessagesStackPatient';
import CategoryStack from './ScheduleStack';

import {bellIcon} from '../Assets/TabSvgs';
import {bellSelected} from '../Assets/TabSvgs';
import {homeIcon} from '../Assets/TabSvgs';
import {homeIconClicked} from '../Assets/TabSvgs';
import {messagesIcon} from '../Assets/TabSvgs';
import {messageSelected} from '../Assets/TabSvgs';
import {dateIcon} from '../Assets/TabSvgs';
import {dateSelected} from '../Assets/TabSvgs';
import {reportIcon} from '../Assets/TabSvgs';
import {reportIconSelected} from '../Assets/TabSvgs';
import HomeStackPatient from './HomeStackPatient';
// import ProfileStackPatient from './ReportStack';
import ScheduleStackPatient from './ScheduleStackPatient';
import ReportStackPatient from './ReportStackPatient';
import NotificationStackPatient from './NotificationStackPatient';
import {SvgXml} from 'react-native-svg';
import {colors} from '../Global/globalstyles';
import MessagesStackPatient from './MessagesStackPatient';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigationPatient() {
  const [route, setRoute] = useState('HomeStackPatient');

  // React.useLayoutEffect(() => {
  //   const routeName = getFocusedRouteNameFromRoute(route);
  //   if (routeName === 'HomePatient') {
  //     navigation.setOptions({tabBarVisible: false});
  //   } else {
  //     navigation.setOptions({tabBarVisible: true});
  //   }
  // }, [navigation, route]);

  return (
    <Tab.Navigator
      initialRouteName="HomeStackPatient"
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      labeled={false}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(28, 107, 164, 1)',
          width: '100%',
          height: '6%',
          borderRadius: 30,
          marginBottom: 3,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeStackPatient"
        component={HomeStackPatient}
        listeners={{
          tabPress: e => {
            setRoute('Settings');
          },
        }}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <SvgXml
              style={{marginLeft: 30, marginRight: 20, marginTop: 2, width: 20}}
              xml={focused ? homeIconClicked : homeIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesStackPatient"
        component={MessagesStackPatient}
        options={({route, navigation}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            // console.log('heloooooooooooooo', routeName);
            if (
              routeName === 'VoiceCallPatient' ||
              routeName === 'VideoCallPatient' ||
              routeName === 'TextMessagePatient'
            ) {
              return {display: 'none'};
            }
            return;
          })(route),
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <SvgXml
              style={{marginLeft: 5, marginTop: 2}}
              xml={focused ? messageSelected : messagesIcon}
            />
          ),
        })}
      />

      <Tab.Screen
        name="ScheduleStackPatient"
        component={ScheduleStackPatient}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <SvgXml
              style={{marginLeft: 5, marginTop: 2}}
              xml={focused ? dateSelected : dateIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ReportStackPatient"
        component={ReportStackPatient}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <SvgXml
              style={{marginRight: 20, marginTop: 2}}
              xml={focused ? reportIconSelected : reportIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationStackPatient"
        component={NotificationStackPatient}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <SvgXml
              style={{marginRight: 35, marginTop: 2}}
              xml={focused ? bellSelected : bellIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
