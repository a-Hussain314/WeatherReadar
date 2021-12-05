import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import colors from '../styles/colors';

const SearchModal = ({ setModalVisible }) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => { setModalVisible(false) }}
                activeOpacity={1}
                style={{ alignSelf: "stretch", flex: 0.4 }}
            >
            </TouchableOpacity>
            <View style={{ backgroundColor: "yellow", alignSelf: "stretch", flex: 0.6 }}>
                <Text>Hello Modal</Text>
            </View>
        </>
    )
};
export default SearchModal;