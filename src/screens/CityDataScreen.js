import React from 'react';
import { View, Text } from "react-native";
import Layout from '../components/Layout';
import font from '../styles/font';

const CityDataScreen = ({ route }) => {
  const city = route.params;
  // console.log(route.params)
  return (
    <Layout>
      <Text style={{ fontSize: 32, fontFamily: font.families.LatoBold }}>{city.name} Data Screen</Text>
      <Text style={{ fontSize: 32, fontFamily: font.families.LatoBold }}>{city.temp}</Text>
    </Layout>
  )
}
export default CityDataScreen;
