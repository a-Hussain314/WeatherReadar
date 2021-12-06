export const getWeatherDataFromApi = async (data = {
    cityName: "",
    onSuccess: () => { },
    onFailure: () => { }
}) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.cityName}&appid=f5cb0b965ea1564c50c6f1b74534d823`);
        const json = await response.json();
        if (response.status === 200) {
            data.onSuccess(json)
        }
        else {
            data.onFailure()
        }
    } catch (error) {
        data.onFailure()
    }
}