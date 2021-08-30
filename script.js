/* <!----------------------------------------------------------------------------------------
-------------------------Aurthor : Ashik Ahamed--------------------------------
________________feel free to do experiment wtih the code__________________
________________'follow me on gitHub.com/ahamedashik01/'____________
________________give a star to the repository___________________
------------------------------------------------------->
 */

// api call function 
const loadWeather = () => {
    const inputId = document.getElementById('input-field');
    const cityName = inputId.value;
    inputId.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0cfa76f156dac894a41edf4fccc36eb8` // api key 
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}

const displayData = city => {
    // data information 
    const cityCountry = city.sys.country;
    const cityName = city.name;
    const cityWeather = city.weather[0].main;
    const cityWeatherDsc = city.weather[0].description;
    const cityTemp = city.main.temp;
    const cityTempToDeg = parseInt(cityTemp - 273.15);
    const cityMaxTemp = city.main.temp_max;
    const cityMaxTempToDeg = parseInt(cityMaxTemp - 273.15);
    const cityMinTemp = city.main.temp_min;
    const cityMinTemoToDeg = parseInt(cityMinTemp - 273.15);
    const feelsLike = parseInt(city.main.feels_like - 273.15);
    // display container 
    const displayBox = document.getElementById('display-box');
    displayBox.classList.add('info')
    displayBox.classList.add('text-center')
    displayBox.innerHTML = `
    <h2><i class="fas fa-street-view"></i> ${cityName} , ${cityCountry}</h2>
    <p>${cityWeather} | Feels Like - ${feelsLike}°C | ${cityWeatherDsc}</p>
    <h1>${cityTempToDeg}°C</h1>
    <p>Min - ${cityMinTemoToDeg}°C | Max - ${cityMaxTempToDeg}°C</p>
    `;
};