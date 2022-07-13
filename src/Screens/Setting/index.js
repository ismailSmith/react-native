/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, HeaderButton} from '../../Components';
import NavigationStyles from '../../Styles/NavigationStyles';
import NavigationService from '../../Navigation';
import {IconX, ICON_TYPE} from '../../Icons';
import useAppTheme from '../../Themes/Context';

const SettingScreen = ({navigation}) => {
  const {theme} = useAppTheme();

  useEffect(() => {
    const _toggleDrawer = () => {
      NavigationService.toggleDrawer();
    };

    console.log('use effect setting');

    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{marginRight: 10}}>
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
          justifyContent: 'center',
          padding: 20,
        }}>
        <Text style={{fontSize: 20, padding: 20, textAlign: 'center'}}>
          Setting Screen
        </Text>
      </Container>
    </LoadingActionContainer>
  );
};

SettingScreen.navigationOptions = ({navigation, screenProps}) => {
  const {theme} = screenProps;
  return {
    headerStyle: [
      NavigationStyles.header_statusBar,
      {backgroundColor: theme.colors.header},
    ],
    headerTitle: 'Setting',
    headerTintColor: theme.colors.headerTitle,
    headerTitleStyle: [
      NavigationStyles.headerTitle,
      {color: theme.colors.headerTitle},
    ],
  };
};

export default SettingScreen;
