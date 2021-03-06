import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/core';
import colors from '../styles/colors';
import font from '../styles/font';

const CityRecordsListItem = ({ city }) => {
    const navigation = useNavigation();

    const navigateToDataScreen = () => {
        navigation.navigate("CityDataScreen", { city, isHistoricalData: true })
    }

    return (
        <TouchableOpacity onPress={navigateToDataScreen} style={styles.CityRecordsListItem}>
            <Image resizeMode={"stretch"} source={{ uri: `https://openweathermap.org/img/w/${city.weather[0]?.icon}.png` }} style={styles.recordIcon} />
            <View style={styles.recordInfo}>
                <Text style={styles.recordTime}>{`${city.recordDatetime.date} - ${city.recordDatetime.time}`}</Text>
                <Text style={styles.recordWeather}>
                    {city?.weather[0]?.description && <Text >{city.weather[0].description}</Text>}
                    {city?.weather[0]?.description && city?.main?.temp && <Text >, </Text>}
                    {city?.main?.temp && <Text >{(city.main.temp - 273.15).toFixed(1)}° C</Text>}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CityRecordsListItem;

const styles = StyleSheet.create({
    CityRecordsListItem: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    recordIcon: {
        width: 50,
        height: 50,
        marginRight: 24,
    },
    recordTime: {
        color: colors.darkgrey,
        fontSize: font.sizes.small,
        fontWeight: "bold",
    },
    recordWeather: {
        color: colors.dark,
        fontSize: font.sizes.medium,
        fontFamily: font.families.LatoBold,
        fontWeight: "bold",
        textTransform: "capitalize"
    }
})

