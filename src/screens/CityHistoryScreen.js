import React from 'react';
import { View, Text } from "react-native";
import Layout from '../components/Layout';
import font from '../styles/font';

const CityHistoryScreen = ({ route }) => {
  const city = route.params;
  // console.log(route.params)
  return (
    <Layout title={`${city.name} Historical`}>
      <Text style={{ fontSize: 32, fontFamily: font.families.LatoBold }}>{city.name} History Screen</Text>
    </Layout>
  )
}
export default CityHistoryScreen;
