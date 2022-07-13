/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, HeaderButton} from '../../Components';
import {IconX, ICON_TYPE} from '../../Icons';
import NavigationStyles from '../../Styles/NavigationStyles';
import useAppTheme from '../../Themes/Context';
// import Button from "react-native-bootstrap-buttons";
import { StyleSheet } from 'react-native';
import NavigationService from '../../Navigation';
import { ButtonX } from '../../Components';

const PrayerScreen = ({navigation}) => {
  const {theme} = useAppTheme();

  useEffect(() => {
    const _toggleDrawer = () => {
      NavigationService.toggleDrawer();
    };

    console.log('use effect Prayer');

    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{marginLeft: 10}}>
            <HeaderButton
              icon="menufold"
              color={theme.colors.headerTitle}
              iconOrigin={ICON_TYPE.ANT_ICON}
              onPress={_toggleDrawer}
            />
          </View>
        );
      },
    });
  }, [navigation, theme.colors.headerTitle]);

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          padding: 30, marginTop: 30
        }}>
          <View>
            <ButtonX
              dark={true}
              mode="outlined"
              label={"BERGEN"}
              style={styles.btn}
              labelStyle={styles.btnText}
              // onPress={_changeLocale}
            />
            <ButtonX
              dark={true}
              mode="outlined"
              label={"KRISTIANSAND"}
              style={styles.btn}
              labelStyle={styles.btnText}
              // onPress={_changeLocale}
            />
            <ButtonX
              dark={true}
              mode="outlined"
              label={"OSLO"}
              style={styles.btn}
              labelStyle={styles.btnText}
              // onPress={_changeLocale}
            />
            <ButtonX
              dark={true}
              mode="outlined"
              label={"STAVANGER"}
              style={styles.btn}
              labelStyle={styles.btnText}
              // onPress={_changeLocale}
            />
            <ButtonX
              dark={true}
              mode="outlined"
              label={"TRONDHEIM"}
              style={styles.btn}
              labelStyle={styles.btnText}
              // onPress={_changeLocale}
            />
          </View>
      </Container>
    </LoadingActionContainer>
  );
};

PrayerScreen.navigationOptions = ({navigation, screenProps}) => {
  const {theme} = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      {backgroundColor: theme.colors.header},
    ],
    headerTitle: 'Prayer',
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
  };
};

const styles = StyleSheet.create({
  btn: {borderRadius: 50, height: 60, backgroundColor: 'white', },
  btnText: {color: "#ffb687", fontSize: 22}
});

export default PrayerScreen;
