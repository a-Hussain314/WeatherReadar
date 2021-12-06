import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from "react-native";
import Layout from '../components/Layout';
import colors from '../styles/colors';
import font from '../styles/font';
import { formattedDatetime } from '../utils/formattedDatetime';
import { addRecordToCity } from '../utils/localStorage';
import { getWeatherDataFromApi } from '../utils/requester';

const CityDataScreen = ({ route }) => {
  const [cityData, setCityData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { cityNameWithCountryIso } = route.params;
  const cityName = cityNameWithCountryIso.split(",")[0];

  useEffect(() => {
    getWeatherDataFromApi({
      cityName,
      onSuccess: (data) => {
        setIsLoading(false)
        setCityData(data);
        // add the current time stamp to each data record
        addRecordToCity(cityNameWithCountryIso, { ...data, recordDatetime: formattedDatetime() })
      },
      onFailure: () => {
        setIsLoading(false)
        setCityData(null);
      }
    })
  }, [])

  return (
    <Layout>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} style={styles.dataBox}>
        <Text style={styles.title}>{cityNameWithCountryIso}</Text>
        {isLoading && <ActivityIndicator style={styles.spinner} size="large" color={colors.blue} />}
        {cityData && <Image resizeMode={"contain"} source={{ uri: `https://openweathermap.org/img/w/${cityData.weather[0]?.icon}.png` }} style={styles.icon} />}
        {cityData &&
          <>
            <View style={styles.dataItem}>
              <Text style={styles.dataItemName}>Description</Text>
              {cityData.weather[0]?.description && <Text style={styles.dataItemInfo}>{cityData.weather[0].description}</Text>}
            </View>
            <View style={styles.dataItem}>
              <Text style={styles.dataItemName}>Temperature</Text>
              {cityData.main?.temp && <Text style={styles.dataItemInfo}>{(cityData.main.temp - 273.15).toFixed(1)}° C</Text>}
            </View>
            <View style={styles.dataItem}>
              <Text style={styles.dataItemName}>Humidity</Text>
              {cityData.main?.humidity && <Text style={styles.dataItemInfo}>{cityData.main.humidity}%</Text>}
            </View>
            <View style={styles.dataItem}>
              <Text style={styles.dataItemName}>Windspeed</Text>
              {cityData.wind?.speed && <Text style={styles.dataItemInfo}>{cityData.wind.speed} Km/h</Text>}
            </View>
          </>
        }
      </ScrollView>
    </Layout>
  )
}
export default CityDataScreen;

const styles = StyleSheet.create({
  dataBox: {
    flex: 0.6,
    maxHeight: 425,
    width: "85%",
    alignSelf: "center",
    padding: 30,
    transform: [{ translateY: -50 }],
    backgroundColor: colors.light,
    shadowColor: colors.dark_transparent,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  title: {
    fontSize: font.sizes.xlarge,
    fontFamily: font.families.LatoBold,
    color: colors.dark,
    textAlign: "center",
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 50,
  },
  dataItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4
  },
  dataItemName: {
    fontSize: font.sizes.medium,
    fontFamily: font.families.LatoBold,
    color: colors.dark,
    fontWeight: "800"
  },
  dataItemInfo: {
    fontSize: font.sizes.large,
    fontFamily: font.families.LatoBold,
    color: colors.blue,
    textTransform: "capitalize"
  },
  spinner: {
    marginVertical: 10
  },
})