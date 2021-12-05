import React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CitiesListScreen from './src/screens/CitiesListScreen';
import CityDataScreen from './src/screens/CityDataScreen';
import CityHistoryScreen from './src/screens/CityHistoryScreen';
import colors from './src/styles/colors';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="CitiesListScreen" screenOptions={{
        title: null,
        headerStyle: { backgroundColor: colors.blue, borderWidth: 5 },
        headerTintColor: colors.light,
        headerShadowVisible: false
      }}>
        <Stack.Screen name="CitiesListScreen" component={CitiesListScreen} />
        <Stack.Screen name="CityDataScreen" component={CityDataScreen} />
        <Stack.Screen name="CityHistoryScreen" component={CityHistoryScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default App;
