import React, { memo, useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native"
import CitySearchListItem from './CitySearchListItem';
import { getWeatherDataFromApi } from "../utils/requester";
import colors from '../styles/colors';
import font from '../styles/font';

const SearchModal = ({ setModalVisible, setCites }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const DebounceTimeoutId = useRef(null);

    // to listen to search text input cahnges then,
    // search for city once user stop writing (debouncing).
    useEffect(() => {
        if (DebounceTimeoutId) {
            // clear the old timeOut function, to set a new one,
            clearTimeout(DebounceTimeoutId.current);

            if (searchTerm) {
                // once user start typing, clear the list. 
                setSearchResults([]);

                // once use start typing, show the spinner,
                if (!isLoading) {
                    setIsLoading(true);
                }

                // set a new timed out function.
                DebounceTimeoutId.current = setTimeout(() => {
                    getWeatherDataFromApi({
                        cityName: searchTerm,
                        onSuccess: (data) => {
                            // if city is found : hide the spinner & show the city in the list.
                            setIsLoading(false);
                            setSearchResults([data]);
                        },
                        onFailure: () => {
                            // if city is not found : hide the spinner & show the not found text.
                            setIsLoading(false);
                            setSearchResults(null);
                        }
                    })
                }, 1000)

            }
            else {
                // once user clear the text input :  hide the spinner & set the list to be empty.
                setIsLoading(false);
                setSearchResults([]);
            }
        }
    }, [searchTerm])

    return (
        <>
            <TranparentTabableArea setModalVisible={setModalVisible} />
            <View style={styles.modal}>
                <View style={styles.textInputContainer}>
                    <Image style={styles.serachIcon} source={require("../../assets/images/search.png")} />
                    <TextInput
                        style={styles.input}
                        onChangeText={setSearchTerm}
                        value={searchTerm}
                        placeholder="Search for cities"
                        placeholderTextColor={colors.dark}
                        returnKeyType="search"
                    />
                </View>
                {isLoading && <ActivityIndicator style={styles.spinner} size="large" color={colors.blue} />}
                {searchResults ?
                    <FlatList
                        style={styles.searchResultsList}
                        data={searchResults}
                        renderItem={({ item }) => <CitySearchListItem {...{ city: item, setCites, setModalVisible }} />}
                        keyExtractor={(item) => item.id}
                    />
                    :
                    <Text style={styles.noResultText}>city not found</Text>
                }
            </View>
        </>
    )
};
export default SearchModal;

// separated and memoized to prevent unnecessary re-renders
const TranparentTabableArea = memo(({ setModalVisible }) => {
    return (
        <TouchableOpacity
            onPress={() => { setModalVisible(false) }}
            activeOpacity={1}
            style={styles.tranparentTabableArea}
        >
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    tranparentTabableArea: {
        alignSelf: "stretch",
        flex: 0.4
    },
    modal: {
        backgroundColor: colors.light,
        alignSelf: "stretch",
        flex: 0.6
    },
    textInputContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: colors.grey,
        paddingHorizontal: 24,
    },
    serachIcon: {
        width: 32,
        height: 32,
        marginRight: 16,
    },
    input: {
        flex: 1,
        height: 75,
        fontSize: font.sizes.medium,
        fontFamily: font.families.LatoBold,
    },
    searchResultsList: {
        paddingVertical: 8
    },
    spinner: {
        marginVertical: 24
    },
    noResultText: {
        fontSize: font.sizes.medium,
        textAlign: "center",
        marginVertical: 24
    }
})