import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from "react-native";
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
      />
    </Layout>
  )
}
export default CityHistoryScreen;
