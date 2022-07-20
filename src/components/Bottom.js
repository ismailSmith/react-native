import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../styles/colors';
import Fonts from '../styles/Fonts';

const Header = props => {
  const {container, headerText} = styles;
  const {RalewaySemiBold, RalewayBold} = Fonts;
  return (
    <View style={container}>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Ionicons style={{textAlign: 'center'}} name="home" size={25} color={colors.orangeDark} />
        <Text style={{color: colors.darkBlue}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <FontAwesome style={{textAlign: 'center'}} name="table" size={25} color={colors.orangeDark} />
        <Text style={{color: colors.darkBlue}}>Prayer Table</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <FontAwesome style={{textAlign: 'center'}} name="compass" size={25} color={colors.orangeDark} />
        <Text style={{color: colors.darkBlue}}>Qibla</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <FontAwesome style={{textAlign: 'center'}} name="file-text-o" size={25} color={colors.orangeDark} />
        <Text style={{color: colors.darkBlue}}>Taqibaat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffe8c6',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 0,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  headerText: {
    position: 'absolute',
    left: '46%',
    top: 26,
    fontSize: 20,
    color: colors.darkBlue,
  },
});

const tabStyle = StyleSheet.create({
    btn: {
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 6,
      borderColor: '#fff',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Header;
