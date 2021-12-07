import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../styles/colors";
import font from "../styles/font";

const CityDeleteModal = ({ citySelectedToDelete, onDeleteModalConfirm, onDeleteModalCancel }) => {
    return (
        <View style={styles.deleteModalContainer}>
            <View style={styles.deleteModal}>
                <Text style={styles.deleteCityText}>Are you sure you want to delete {citySelectedToDelete.current} ? </Text>
                <View style={styles.deleteActionConatiner}>
                    <TouchableOpacity onPress={onDeleteModalCancel}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDeleteModalConfirm}>
                        <Text style={styles.confirmText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CityDeleteModal;

const styles = StyleSheet.create({
    deleteModalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.dark_transparent
    },
    deleteModal: {
        backgroundColor: colors.light,
        padding: 24,
        borderRadius: 8
    },
    deleteActionConatiner: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 24
    },
    deleteCityText: {
        color: colors.blue,
        fontSize: font.sizes.small,
        fontFamily: font.families.LatoBold,
    },
    confirmText: {
        fontSize: font.sizes.small,
        fontFamily: font.families.LatoBold,
        color: colors.danger,
        margin:10,
    },
    cancelText: {
        fontSize: font.sizes.small,
        fontFamily: font.families.LatoBold,
        color: colors.darkgrey,
        margin: 10
    }
});