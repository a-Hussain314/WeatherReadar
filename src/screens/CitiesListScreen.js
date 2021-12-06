import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import CityListItem from '../components/CityListItem';
import Layout from '../components/Layout';
import SearchModal from '../components/SearchModal';
import colors from '../styles/colors';
import font from '../styles/font';
import { getCities } from '../utils/localStorage';
const CitiesListScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cities, setCites] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCities(setCites);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Layout title="Cities">
      <View style={styles.CitiesListScreen}>

        <FlatList
          data={cities}
          renderItem={({ item }) => <CityListItem cityNameWithCountryIso={item} />}
          keyExtractor={(item) => item}
        />

        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
          <Text style={[styles.addButtonContent, styles.addButtonPlus]}>+</Text>
          <Text style={[styles.addButtonContent, styles.addButtonText]}>Add city</Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <SearchModal {...{ setCites, setModalVisible }} />
          </View>
        </Modal>

      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  CitiesListScreen: {
    flex: 1,
    position: "relative"
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
