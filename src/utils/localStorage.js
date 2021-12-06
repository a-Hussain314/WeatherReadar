import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCities = async (callback = () => { }) => {
    try {
        const value = await AsyncStorage.getItem("cities");
        console.log("AsyncStorage : cities fetched successfully", Object.keys(JSON.parse(value)));
        // turn the object values into array
        callback(Object.keys(JSON.parse(value)));


    } catch (e) {
        // 
    }
}

export const addCity = async (cityName = "", callback = () => { }) => {
    try {
        const citeis = await AsyncStorage.getItem("cities");
        // console.log("add City(0)", citeis)
        if (citeis) {
            const parsedCities = JSON.parse(citeis);
            if (!parsedCities[cityName]) {
                parsedCities[cityName] = [];
                await AsyncStorage.setItem("cities", JSON.stringify(parsedCities));
                // console.log("add City(1)", Object.keys(parsedCities))
                callback(Object.keys(parsedCities));
            }
        }
        else {
            const newCities = { [cityName]: [] };
            // console.log("add City(2)", Object.keys(newCities));
            callback(Object.keys(newCities));
            await AsyncStorage.setItem("cities", JSON.stringify(newCities));
        }

    } catch (e) {
        console.error("add city error : ", e)
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
                callback(parsedCities)
            }
        }
    } catch (e) {
        // 
    }
}

export const addRecordToCity = async (cityName = "", record = {}) => {
    try {
        const citeis = await AsyncStorage.getItem("cities");
        if (citeis) {
            const parsedCities = JSON.parse(citeis);
            if (parsedCities[cityName]) {
                console.log("addRecordToCity", { cityName, record })
                parsedCities[cityName] = [...parsedCities[cityName], record];
                await AsyncStorage.setItem("cities", JSON.stringify(parsedCities));
            }
        }

    } catch (e) {
        // 
    }
}

export const getCityRecords = async (cityName = "", callback = () => { }) => {
    try {
        const citeis = await AsyncStorage.getItem("cities");
        if (citeis) {
            const parsedCities = JSON.parse(citeis);
            if (parsedCities[cityName]) {
                console.log("getCityRecords", parsedCities[cityName])
                callback(parsedCities[cityName])
            }
        }

    } catch (e) {
        // 
    }
}