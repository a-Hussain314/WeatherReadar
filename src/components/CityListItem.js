import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';
import font from '../styles/font';

const CityListItem = ({ city }) => {
    const navigation = useNavigation();

    const navigateToDataScreen = () => {
        navigation.navigate("CityDataScreen", { ...city })
    }

    const navigateToHistoryScreen = () => {
        navigation.navigate("CityHistoryScreen", { ...city })
    }

    return (
        <View style={styles.cityListItem}>
            <TouchableOpacity onPress={navigateToDataScreen} style={[styles.button, styles.cityDataButton]}>
                <View style={styles.cityDataButtonWrapper}>
                    <Image style={styles.cityDataButtonImage} source={require("../../assets/images/city.png")} />
                    <Text style={{ color: colors.dark, fontSize: font.sizes.medium, fontFamily: font.families.LatoBold, fontWeight: "800" }}>{`${city?.name}, ${city.sys.country}`}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToHistoryScreen} style={[styles.button, styles.cityHistoryButton]}>
                <Image style={{ width: 32, height: 32 }} source={require("../../assets/images/info.png")} />
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
        // borderWidth: 1

    },
    button: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        // borderWidth: 1
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
        fontFamily: font.families.LatoBold
    },
    cityHistoryButton: {
        justifyContent: "center",
        alignItems: "center",
    },
})

