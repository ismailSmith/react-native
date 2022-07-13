/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {Container, HeaderButton} from '../../Components';
import useAppTheme from '../../Themes/Context';
import {IconX, ICON_TYPE} from '../../Icons';
import {Image} from 'react-native';
import metrics from '../../Themes/Metrics';
import {useStoreState} from 'easy-peasy';
import Fonts from '../../Themes/Fonts';
import NavigationService from '../../Navigation';
import { StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const MainScreen = ({routes, navigation}) => {
  const {theme} = useAppTheme();

  useEffect(() => {
    const _toggleDrawer = () => {
      NavigationService.toggleDrawer();
    };

    console.log('use effect home');

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

  const tableHead = ['Oslo', '12:00'];
  const tableData = [
    ['Imsak', '12:00'],
    ['Fire', '12:00'],
    ['Sunrise', '12:00'],
    ['Dhur', '12:00'],
    ['Asr', '12:00'],
    ['Sunset', '12:00'],
    ['Maghrib', '12:00'],
    ['Isha', '12:00'],
    ['Midnight', '12:00'],
  ];

  return (
    <LoadingActionContainer fixed>
      <Container
        style={{
          padding: 30, marginTop: 30
        }}>
          <View style={{ borderRadius: 10}}>
            <Table style={styles.table}>
              <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={tableData} style={styles.body} textStyle={styles.text}/>
            </Table>
          </View>
      </Container>
    </LoadingActionContainer>
  );
};

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#faeac6', borderRadius: 10},
  body: { height: 50},
  text: { margin: 6 , textAlign: 'center', fontSize: 20, fontWeight: 'bold'},
  table: {backgroundColor:'#ffffff', borderRadius: 10, padding: 10, margin: 0.5, marginBottom: 0.8,}
});

export default MainScreen;
