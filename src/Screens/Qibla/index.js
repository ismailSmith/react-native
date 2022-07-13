import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import CompassHeading from 'react-native-compass-heading';
import useAppTheme from '../../Themes/Context';
import {IconX, ICON_TYPE} from '../../Icons';
import NavigationService from '../../Navigation';
import {Container, HeaderButton} from '../../Components';

const QiblaScreen = ({routes, navigation}) => {
  const [compassHeading, setCompassHeading] = useState(0);
  const {theme} = useAppTheme();

  useEffect(() => {
    const degree_update_rate = 3;

    CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
      setCompassHeading(heading);
    });

    return () => {
      CompassHeading.stop();
    };
  }, []);

  useEffect(() => {
    const _toggleDrawer = () => {
      NavigationService.toggleDrawer();
    };

    console.log('use effect qibla');

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
    <Image
      style={[
        styles.image,
        {transform: [{rotate: `${360 - compassHeading}deg`}]},
      ]}
      resizeMode="contain"
      source={require('../../Assets/images/compass.png')}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
  },
});

export default QiblaScreen;