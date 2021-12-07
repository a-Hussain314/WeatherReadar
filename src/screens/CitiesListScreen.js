import React, { memo, useEffect, useState, useRef, useCallback } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Layout from '../components/Layout';
import CityListItem from '../components/CityListItem';
import CityDeleteModal from '../components/CityDeleteModal';
import SearchModal from '../components/SearchModal';
import colors from '../styles/colors';
import font from '../styles/font';
import { getCities, removeCity } from '../utils/localStorage';

const CitiesListScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [cities, setCites] = useState([]);
  const citySelectedToDelete = useRef(null);

  useEffect(() => {
    // homescreen by default dose not get unmounted and mounted again,
    //  so here we use "focus" event instead.
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      getCities(setCites);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount.
    return unsubscribe;
  }, [navigation]);

  const openDeleteCityModal = useCallback((cityNameWithCountryIso) => {
    citySelectedToDelete.current = cityNameWithCountryIso;
    setDeleteModalVisible(true);
  }, [])

  const onDeleteModalConfirm = useCallback(() => {
    removeCity(citySelectedToDelete.current, setCites);
    setDeleteModalVisible(false);
  }, [citySelectedToDelete.current, setCites, setDeleteModalVisible]);

  const onDeleteModalCancel = useCallback(() => {
    setDeleteModalVisible(false);
  }, [setDeleteModalVisible])


  return (
    <Layout title="Cities">
      <View style={styles.CitiesListScreen}>

        <FlatList
          data={cities}
          renderItem={({ item }) => <CityListItem cityNameWithCountryIso={item} openDeleteCityModal={openDeleteCityModal} />}
          keyExtractor={(item) => item}
          ListEmptyComponent={<Text style={styles.noCitiesText}>no cities added</Text>}
        />

        <AddCityButton setModalVisible={setModalVisible} />

        <Modal
          animationType="fade"
          transparent={true}
          visible={deleteModalVisible}
        >
          <CityDeleteModal {...{ citySelectedToDelete, onDeleteModalConfirm, onDeleteModalCancel }} />
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalContainer}>
            <SearchModal {...{ setCites, setModalVisible }} />
          </View>
        </Modal>

      </View>
    </Layout>
  )
}

// separated and memoized to prevent unnecessary re-renders
const AddCityButton = memo(({ setModalVisible }) => {
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
      <Text style={[styles.addButtonContent, styles.addButtonPlus]}>+</Text>
      <Text style={[styles.addButtonContent, styles.addButtonText]}>Add city</Text>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  CitiesListScreen: {
    flex: 1,
    position: "relative"
  },
  noCitiesText: {
    fontSize: font.sizes.medium,
    textAlign: "center",
    marginVertical: 24
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 16,
    bottom: 40,
    backgroundColor: colors.blue,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 60
  },
  addButtonContent: {
    fontFamily: font.families.LatoBold,
    color: colors.light
  },
  addButtonPlus: {
    fontSize: 36,
    marginRight: 16
  },
  addButtonText: {
    fontSize: font.sizes.medium,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.dark_transparent
  }
});

export default CitiesListScreen;
