import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WishListStack from './MessagesStack';
import ScheduleStack from './ScheduleStack';
import {
  getFocusedRouteNameFromRoute} from '@react-navigation/native';

import { bellIcon } from '../Assets/TabSvgs';
import { bellSelected } from '../Assets/TabSvgs';
import { homeIcon } from '../Assets/TabSvgs';
import { homeIconClicked } from '../Assets/TabSvgs';
import { messagesIcon } from '../Assets/TabSvgs';
import { messageSelected } from '../Assets/TabSvgs';
import { dateIcon } from '../Assets/TabSvgs';
import { dateSelected } from '../Assets/TabSvgs';
import { reportIcon } from '../Assets/TabSvgs';
import { reportIconSelected } from '../Assets/TabSvgs';
import HomeStack from './HomeStack';
import ReportStack from './ReportStack';
import NotificationStack from './NotificationStack';
import {SvgXml} from 'react-native-svg';
import { colors } from '../Global/globalstyles';
import MessagesStack from './MessagesStack';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {

  const [route, setRoute] = useState('ScheduleStack');

  return (
    <Tab.Navigator
      initialRouteName="ScheduleStack"
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
        name="HomeStack"
        component={HomeStack}
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
        name="MessagesStack"
        component={MessagesStack}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log('heloooooooooooooo', routeName);
            if (
              routeName === 'VoiceCall' ||
              routeName === 'VideoCall1' ||
              routeName === 'TextMessage' ||
              routeName === 'Messages'
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
        name="ScheduleStack"
        component={ScheduleStack}
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
        name="ReportStack"
        component={ReportStack}
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
        name="NotificationStack"
        component={NotificationStack}
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
