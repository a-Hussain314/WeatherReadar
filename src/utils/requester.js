export const getWeatherDataFromApi = async (data = {
    cityName: "",
    onSuccess: () => { },
    onFailure: () => { }
}) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.cityName}&appid=f5cb0b965ea1564c50c6f1b74534d823`);
        // console.log(response.status)
        const json = await response.json();
        if (response.status === 200) {
            // console.log(json);
            data.onSuccess(json)
        }
        else {
            // console.log(json)
            data.onFailure()
        }
    } catch (error) {
        // console.error(error);
        data.onFailure()
    }
}