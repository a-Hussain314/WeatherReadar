import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import CityListItem from '../components/CityListItem';
import Layout from '../components/Layout';
import SearchModal from '../components/SearchModal';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import font from '../styles/font';
const CitiesListScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cities, setCites] = useState([
    { "coord": { "lon": -0.1257, "lat": 51.5085 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "base": "stations", "main": { "temp": 277.9, "feels_like": 276.46, "temp_min": 276.65, "temp_max": 279.09, "pressure": 998, "humidity": 90 }, "visibility": 10000, "wind": { "speed": 1.79, "deg": 287, "gust": 6.26 }, "clouds": { "all": 75 }, "dt": 1638669492, "sys": { "type": 2, "id": 2019646, "country": "GB", "sunrise": 1638690568, "sunset": 1638719592 }, "timezone": 0, "id": 2643743, "name": "London", "cod": 200 },
    { "coord": { "lon": 2.3488, "lat": 48.8534 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "base": "stations", "main": { "temp": 277.21, "feels_like": 275.66, "temp_min": 276.23, "temp_max": 277.73, "pressure": 1003, "humidity": 90 }, "visibility": 10000, "wind": { "speed": 1.79, "deg": 270, "gust": 3.58 }, "clouds": { "all": 90 }, "dt": 1638669806, "sys": { "type": 2, "id": 2041230, "country": "FR", "sunrise": 1638689269, "sunset": 1638719704 }, "timezone": 3600, "id": 2988507, "name": "Paris", "cod": 200 },
    { "coord": { "lon": 55.3047, "lat": 25.2582 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "base": "stations", "main": { "temp": 295.49, "feels_like": 295.4, "temp_min": 295.49, "temp_max": 295.49, "pressure": 1017, "humidity": 62, "sea_level": 1017, "grnd_level": 1016 }, "visibility": 10000, "wind": { "speed": 1.92, "deg": 143, "gust": 2.28 }, "clouds": { "all": 69 }, "dt": 1638669707, "sys": { "type": 2, "id": 2032443, "country": "AE", "sunrise": 1638672618, "sunset": 1638710928 }, "timezone": 14400, "id": 292223, "name": "Dubai", "cod": 200 },
  ])


  return (
    <Layout title="Cities">
      <View style={styles.CitiesListScreen}>
        <FlatList
          data={cities}
          renderItem={({ item }) => <CityListItem city={item} />}
          keyExtractor={(item, index) => index}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
          <Text style={[styles.addButtonContent, styles.addButtonPlus]}>+</Text>
          <Text style={[styles.addButtonContent, styles.addButtonText]}>Add city</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <SearchModal setModalVisible={setModalVisible} />
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
  }
});

export default CitiesListScreen;
