import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';
import font from '../styles/font';

const CityListItem = ({ cityNameWithCountryIso, openDeleteCityModal }) => {
    const navigation = useNavigation();

    const navigateToDataScreen = () => {
        navigation.navigate("CityDataScreen", { cityNameWithCountryIso })
    }

    const navigateToHistoryScreen = () => {
        navigation.navigate("CityHistoryScreen", { cityNameWithCountryIso })
    }

    const remove = () => {
        openDeleteCityModal(cityNameWithCountryIso)
    }

    return (
        <View style={styles.cityListItem}>
            <TouchableOpacity onPress={navigateToDataScreen} style={[styles.cityDataButton]}>
                <View style={styles.cityDataButtonWrapper}>
                    <Image style={styles.cityDataButtonImage} source={require("../../assets/images/city.png")} />
                    <Text style={styles.cityDataButtonText}>{cityNameWithCountryIso}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={remove} style={[styles.cityDeleteButton]}>
                <Image style={styles.cityActionImage} source={require("../../assets/images/delete.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToHistoryScreen} style={[styles.cityHistoryButton]}>
                <Image style={styles.cityActionImage} source={require("../../assets/images/info.png")} />
            </TouchableOpacity>
        </View>
    )
}

export default CityListItem;

const styles = StyleSheet.create({
    cityListItem: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
    cityDataButton: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 24,
    },
    cityDataButtonWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    cityDataButtonImage: {
        width: 32,
        height: 32,
        marginRight: 24
    },
    cityDataButtonText: {
        color: colors.dark,
        fontSize: font.sizes.medium,
        fontFamily: font.families.LatoBold,
        fontWeight: "bold"
    }
    ,
    cityHistoryButton: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        paddingRight: 24,
    },
    cityDeleteButton: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 12,
    },
    cityActionImage: {
        width: 32,
        height: 32
    }
})

