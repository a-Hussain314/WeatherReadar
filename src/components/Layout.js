import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from "react-native";
import colors from '../styles/colors';
import font from '../styles/font';

const Layout = ({ children, title = "" }) => {
    return (
        <View style={styles.layout}>
            <View style={styles.customHeader}>
                <Text style={styles.customHeaderText}>{title}</Text>
            </View>
            <View style={styles.childrenContainer}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={require("../../assets/images/backgroundCurves.png")}
                    resizeMode="cover"
                >
                    {children}
                </ImageBackground>
            </View>
        </View >
    )
}
export default Layout;

const styles = StyleSheet.create({
    layout: {
        flex: 1
    },
    customHeader: {
        height: Dimensions.get('window').height * 0.15,
        backgroundColor: colors.blue,
        justifyContent: "flex-end",
    },
    customHeaderText: {
        fontSize: font.sizes.xlarge,
        fontFamily: font.families.LatoRegular,
        color: colors.light,
        paddingLeft: 72,
        marginBottom: 22
    },
    childrenContainer: {
        flex: 1,
        backgroundColor: "#e9e7ed"
    },
    imageBackground: {
        flex: 1
    }
})