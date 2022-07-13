/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Routes from '../Routes/index';
import Home from '../../Screens/Home';
import App from '../../Screens/App';
import Prayer from '../../Screens/Prayer';
import Qibla from '../../Screens/Qibla';
import Taqibaat from '../../Screens/Taqibaat';
import Setting from '../../Screens/Setting';
import {IconX, ICON_TYPE} from '../../Icons';
import {createStackNavigator} from '@react-navigation/stack';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';
import NavigationStyles from '../../Styles/NavigationStyles';
import { View, Text, TouchableOpacity  } from 'react-native';

const HomeStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t('THE WAY TO ALLAH'),
          headerStyle: [
            NavigationStyles.header_statusBar,
            {backgroundColor: theme.colors.header},
          ],
          headerTitleStyle: [
            NavigationStyles.headerTitle,
            {color: theme.colors.headerTitle, marginLeft: 80},
          ],
        }}
        name="homestackscreen"
        component={Home}
      />
    </Stack.Navigator>
  );
};

const PrayerStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t('THE WAY TO ALLAH'),
          headerStyle: [
            NavigationStyles.header_statusBar,
            {backgroundColor: theme.colors.header},
          ],
          headerTitleStyle: [
            NavigationStyles.headerTitle,
            {color: theme.colors.headerTitle, marginLeft: 80},
          ],
        }}
        name="prayerStackScreen"
        component={Prayer}
      />
    </Stack.Navigator>
  );
};

const QiblaStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={(route, navigation) => {
          return {
            title: t('THE WAY TO ALLAH'),
            headerStyle: [
              NavigationStyles.header_statusBar,
              {backgroundColor: theme.colors.header},
            ],
            headerTitleStyle: [
              NavigationStyles.headerTitle,
              {color: theme.colors.headerTitle, marginLeft: 80},
            ],
          };
        }}
        name="qiblaStackScreen"
        component={Qibla}
      />
    </Stack.Navigator>
  );
};

const TaqibaatScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={(route, navigation) => {
          return {
            title: t('THE WAY TO ALLAH'),
            headerStyle: [
              NavigationStyles.header_statusBar,
              {backgroundColor: theme.colors.header},
            ],
            headerTitleStyle: [
              NavigationStyles.headerTitle,
              {color: theme.colors.headerTitle, marginLeft: 80},
            ],
          };
        }}
        name="taqibaatScreen"
        component={Taqibaat}
      />
    </Stack.Navigator>
  );
};

// const SettingScreen = () => {
//   const {t} = useTranslation();
//   const {theme} = useAppTheme();

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         options={(route, navigation) => {
//           return {
//             title: t(''),
//             headerStyle: [
//               NavigationStyles.header_statusBar,
//               {backgroundColor: theme.colors.header},
//             ],
//             headerTitleStyle: [
//               NavigationStyles.headerTitle,
//               {color: theme.colors.headerTitle},
//             ],
//           };
//         }}
//         name="settingScreen"
//         component={Setting}
//       />
//     </Stack.Navigator>
//   );
// };

function getHomeIcon({focused, color}) {
  return (
    <IconX
      // style={{marginBottom: 5}}
      origin={ICON_TYPE.OCTICONS}
      name={'home'}
      color={color}
    />
  );
}

function getPrayerIcon({focused, color}) {
  return (
    <IconX
      // style={{marginBottom: 5}}
      origin={ICON_TYPE.TABLE}
      name={'table'}
      color={color}
    />
  );
}

function getQiviaIcon({focused, color}) {
  return (
    <IconX
      // style={{marginBottom: 5}}
      origin={ICON_TYPE.COMPASS}
      name={'compass'}
      color={color}
    />
  );
}

function getTaqibaatIcon({focused, color}) {
  return (
    <IconX
      // style={{marginBottom: 5}}
      origin={ICON_TYPE.TEXT}
      name={'file-text-o'}
      color={color}
    />
  );
}

// function getSettingIcon({focused, color}) {
//   return (
//     <IconX
//       style={{marginBottom: 5}}
//       origin={ICON_TYPE.SETTING}
//       name={'setting'}
//       color={color}
//     />
//   );
// }

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const {theme} = useAppTheme();
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME_SCREEN}
      backBehavior={'initialRoute'}
      inactiveColor="#ff6900"
      activeColor={theme.colors.black}
      shifting={false}
      barStyle={{
        backgroundColor: theme.colors.bottom, 
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        bottom: 0,
        padding: 10,
        width: '100%',
        zIndex: 0,
      }}
      // labeled={false}
      >
      <Tab.Screen
        options={{
          tabBarIcon: getHomeIcon,
          title: 'Home',
        }}
        name={Routes.HOME_SCREEN}
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getPrayerIcon,
          title: 'Prayer Table',
        }}
        name={Routes.PRAYER_SCREEN}
        component={PrayerStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getQiviaIcon,
          title: 'Qibla',
        }}
        name={Routes.QIBLA_SCREEN}
        component={QiblaStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTaqibaatIcon,
          title: 'Taqibaat',
        }}
        name={Routes.TAQIBAAT_SCREEN}
        component={TaqibaatScreen}
      />
      {/* <Tab.Screen
        options={{
          tabBarIcon: getSettingIcon,
          title: 'Setting',
        }}
        name={Routes.SETTING_SCREEN}
        component={SettingScreen}
      /> */}
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'bottomtabs'} component={BottomTabs} />
    </Stack.Navigator>
  );
};
