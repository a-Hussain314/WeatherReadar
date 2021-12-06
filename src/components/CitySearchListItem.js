import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from '../styles/colors';
import font from '../styles/font';
import { addCity } from '../utils/localStorage';

const CitySearchListItem = ({ city, setCites, setModalVisible }) => {
    const add = () => {
        addCity(`${city?.name}, ${city.sys.country}`, setCites);
        setModalVisible(false);
    }
    return (
        <View style={styles.CitySearchListItem}>
            <View style={styles.cityDataWrapper}>
                <Image style={styles.cityDataImage} source={require("../../assets/images/city.png")} />
                <Text style={styles.cityDataText}>{`${city?.name}, ${city.sys.country}`}</Text>
            </View>
            <TouchableOpacity onPress={add} style={[styles.button, styles.addCityButton]}>
                <Text style={styles.addCityText}>Add City</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CitySearchListItem;

const styles = StyleSheet.create({
    CitySearchListItem: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
        // borderWidth: 1
    },
    cityDataWrapper: {
        flex: 1,
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    cityDataImage: {
        width: 32,
        height: 32,
        marginRight: 24
    },
    cityDataText: {
        color: colors.dark,
        fontSize: font.sizes.medium,
        fontFamily: font.families.LatoBold,
        fontWeight: "bold",
    },
    addCityButton: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 24,
    },
    addCityText: {
        color: colors.blue,
        fontSize: font.sizes.small,
        fontFamily: font.families.LatoBold
    }
})

