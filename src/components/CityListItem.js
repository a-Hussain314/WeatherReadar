import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';
import font from '../styles/font';

const CityListItem = ({ cityNameWithCountryIso }) => {
    const navigation = useNavigation();
    const navigateToDataScreen = () => {
        navigation.navigate("CityDataScreen", {cityNameWithCountryIso})
    }

    const navigateToHistoryScreen = () => {
        navigation.navigate("CityHistoryScreen", {cityNameWithCountryIso})
    }

    return (
        <View style={styles.cityListItem}>
            <TouchableOpacity onPress={navigateToDataScreen} style={[styles.button, styles.cityDataButton]}>
                <View style={styles.cityDataButtonWrapper}>
                    <Image style={styles.cityDataButtonImage} source={require("../../assets/images/city.png")} />
                    <Text style={styles.cityDataButtonText}>{cityNameWithCountryIso}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToHistoryScreen} style={[styles.button, styles.cityHistoryButton]}>
                <Image style={styles.cityHistoryIamge} source={require("../../assets/images/info.png")} />
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
    button: {
        paddingVertical: 20,
        paddingHorizontal: 24,
    },
    cityDataButton: {
        flex: 1,
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
        fontWeight:"bold"
    }
    ,
    cityHistoryButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    cityHistoryIamge: {
        width: 32,
        height: 32
    }
})

