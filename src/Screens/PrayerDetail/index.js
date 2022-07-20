import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {getYear} from '../../components/PrayerTableData';
import {colors} from '../../styles/colors';

const PrayerDetailScreen = props => {
  console.log(getYear);
  const {container, headerText, tableHeader, itemText, tableContainer, innerContainer} = styles;
  const renderItem = ({item}) => {
    // console.log(getTimezoneOffset());
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
        }}>

        <Text numberOfLines={1} style={[itemText]}>
          {item.index}
        </Text>
        <Text style={[itemText]}>{item.imsak}</Text>
        <Text style={[itemText]}>{item.fajr}</Text>
        <Text style={[itemText]}>{item.sunrise}</Text>
        <Text style={[itemText]}>{item.dhuhr}</Text>
        <Text style={[itemText]}>{item.sunset}</Text>
        <Text style={[itemText]}>{item.maghrib}</Text>
      </View>
    );
  };
  return (
    <View style={container}>
        <ScrollView style={innerContainer}>
          <Text style={headerText}>{props.route.params.title}</Text>
          <View
            style={{
              borderColor: colors.orangeDark,
              borderWidth: 1,
              borderRadius: 15,
              marginBottom: 30,
              elevation: 10,
              marginHorizontal: 20,
              marginTop: 5,
            }}>
            <View style={tableContainer}>
              <Text style={[tableHeader, {textAlign: 'left'}]}>Dato</Text>
              <Text style={[tableHeader]}>Imsak</Text>
              <Text style={[tableHeader]}>Fajr</Text>
              <Text style={[tableHeader]}>Solopp</Text>
              <Text style={[tableHeader]}>Dhur</Text>
              <Text style={[tableHeader]}>Solned</Text>
              <Text style={[tableHeader, {textAlign: 'right'}]}>Maghrib</Text>
            </View>
            <FlatList
              data={getYear}
              contentContainerStyle={{
                backgroundColor: '#fff',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                paddingBottom: 10,
              }}
              renderItem={renderItem}
            />
          </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orangeMedium,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.orangeExtraLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    elevation: 5,
  },

  headerText: {
    fontSize: 18,
    color: 'grey',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  tableHeader: {
    color: colors.orangeDark,
    fontSize: 13,
    flex: 1,
    textAlign: 'center',
  },
  itemText: {
    color: '#000000',
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 13,
  },
  tableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    backgroundColor: colors.orangeLight,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 10,
  },
});

export default PrayerDetailScreen;
