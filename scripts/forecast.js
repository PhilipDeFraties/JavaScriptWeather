const accuWeatherApiKey = "Ie2YAnaOA5I4xpraAHOWReKOzr4T1SDu";

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${accuWeatherApiKey}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

const getCity = async (cityName) => {
    
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${accuWeatherApiKey}&q=${cityName}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]; 

}

// getCity('denver').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data)
// })
// .catch(err => console.log(err))