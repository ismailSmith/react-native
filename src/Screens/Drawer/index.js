/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Section, TouchableX} from '../../Components';
import {View} from 'react-native';
import {Text} from 'react-native';
import metrics from '../../Themes/Metrics';
import useAppTheme from '../../Themes/Context';
import NavigationService from '../../Navigation/index';
import Routes from '../../Navigation/Routes';

const Drawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Content />
    </DrawerContentScrollView>
  );
};

const Content = () => {
  const handleOnpress = (props) => {
    NavigationService.navigate(props);
  }

  const handleOnUpdate = () => {
    console.log('Update Button')
  }
  const {theme} = useAppTheme();
  return (
    <Section
      style={{
        minHeight: metrics.screenHeight,
        backgroundColor: theme.colors.background,
        paddingTop: 40
      }}>
      <Item name="HOME" onPress={() => handleOnpress(Routes.HOME_SCREEN)}/>
      <Item name="PRAYER TABLE" onPress={() => handleOnpress(Routes.PRAYER_SCREEN)}/>
      <Item name="QIBLA" onPress={() => handleOnpress(Routes.QIBLA_SCREEN)}/>
      <Item name="TAQIBAAT" onPress={() => handleOnpress(Routes.TAQIBAAT_SCREEN)}/>
      <Item name="UPDATE DATA" onPress={() => handleOnUpdate()}/>
    </Section>
  );
};

const Item = ({name, color = '#ffffff', onPress = () => {}}) => {
  return (
    <TouchableX border onPress={onPress}>
      <View style={{padding: 16}}>
        <Text style={{color, fontSize: 20 }}>{name}</Text>
      </View>
    </TouchableX>
  );
};

export default Drawer;
