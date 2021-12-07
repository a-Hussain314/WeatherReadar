import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCities = async (callback = () => { }) => {
    try {
        const value = await AsyncStorage.getItem("cities");
        // turn the object values(cities data objects) into array, then call the callback function with it.
        callback(Object.keys(JSON.parse(value)));
    }
    catch (e) {
        // 
    }
}

export const addCity = async (cityName = "", callback = () => { }) => {
    try {
        const citeis = await AsyncStorage.getItem("cities");
        if (citeis) {
            const parsedCities = JSON.parse(citeis);
            if (!parsedCities[cityName]) {
                parsedCities[cityName] = [];
                await AsyncStorage.setItem("cities", JSON.stringify(parsedCities));
                // turn the object keys(cities names) into array, then call the callback function with it.
                callback(Object.keys(parsedCities));
            }
        }
        else {
            const newCities = { [cityName]: [] };
            callback(Object.keys(newCities));
            await AsyncStorage.setItem("cities", JSON.stringify(newCities));
        }

    }
    catch (e) {
        // 
    }
}

export const removeCity = async (cityName = "", callback = () => { }) => {
    try {
        const citeis = await AsyncStorage.getItem("cities");

        if (citeis) {
            const parsedCities = JSON.parse(citeis);
            if (parsedCities[cityName]) {
                delete parsedCities[cityName];
                await AsyncStorage.setItem("cities", JSON.stringify(parsedCities));
                // turn the object keys(remained cities names) into array, then call the callback function with it.
                callback(Object.keys(parsedCities));
            }
        }
    }
    catch (e) {
        // 
    }
}

export const addRecordToCity = async (cityName = "", record = {}) => {
    try {
        const citeis = await AsyncStorage.getItem("cities");
        if (citeis) {
            const parsedCities = JSON.parse(citeis);
            if (parsedCities[cityName]) {
                // add the new record at the top of the list
                parsedCities[cityName] = [record, ...parsedCities[cityName]];
                await AsyncStorage.setItem("cities", JSON.stringify(parsedCities));
            }
        }

    }
    catch (e) {
        // 
    }
}

export const getCityRecords = async (cityName = "", callback = () => { }) => {
    try {
        const citeis = await AsyncStorage.getItem("cities");
        if (citeis) {
            const parsedCities = JSON.parse(citeis);
            if (parsedCities[cityName]) {
                callback(parsedCities[cityName])
            }
        }

    }
    catch (e) {
        // 
    }
}