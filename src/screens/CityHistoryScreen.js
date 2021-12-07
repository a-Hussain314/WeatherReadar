import React, { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet } from "react-native";
import CityRecordsListItem from '../components/CityRecordsListItem';
import Layout from '../components/Layout';
import font from '../styles/font';
import { getCityRecords } from '../utils/localStorage';

const CityHistoryScreen = ({ route }) => {
  const [cityRecords, setCityRecords] = useState([]);
  const { cityNameWithCountryIso } = route.params;
  const cityName = cityNameWithCountryIso.split(",")[0];

  useEffect(() => {
    getCityRecords(cityNameWithCountryIso, (records) => {
      setCityRecords(records);
    })
  }, [])

  return (
    <Layout title={`${cityName} Historical`}>
      <FlatList
        data={cityRecords}
        renderItem={({ item }) => <CityRecordsListItem city={item} />}
        keyExtractor={(item) => item.recordDatetime.timestamp}
        ListEmptyComponent={<Text style={styles.noCitiesText}>no historical weather data for {cityName} added yet</Text>}
      />
    </Layout>
  )
}

const styles = StyleSheet.create({
  noCitiesText: {
    fontSize: font.sizes.medium,
    textAlign: "center",
    marginVertical: 24
  }
});

export default CityHistoryScreen;
