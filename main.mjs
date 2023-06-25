alert("This website is responsive for all screen sizes");
window.getWeather();
function getWeather() {

    let city = document.querySelector("#cityName").value;
    console.log("City Name: ", city);

    let API_KEY = `72df1165103b0c7ca19c5636f5c6d129`;

    //Getting request through api example

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            document.querySelector('#city').innerHTML = `Weather Details Of <br/> ${response.data.name}`
            document.querySelector('#title').innerHTML = `${response.data.main.temp}°C`

            document.querySelector('#country').innerHTML = `Country <br/> ${response.data.sys.country}`
            document.querySelector('#humidity').innerHTML = `Humidity <br/> ${response.data.main.humidity}%`
            document.querySelector('#wind').innerHTML = `Wind <br/> ${(((response.data.wind.speed) * 2.9).toFixed())} km/h <br/> ${response.data.wind.deg}° <br/> From North`
            document.querySelector('#minTemp').innerHTML = `Minimum Temperature <br/> ${response.data.main.temp_min}°C`
            document.querySelector('#maxTemp').innerHTML = `Maximum Temperature <br/> ${response.data.main.temp_max}°C`
            document.querySelector('#pressure').innerHTML = `Pressure <br/> ${response.data.main.pressure} <br/> Pascals`
        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.querySelector("#result").innerHTML = "Weather data not worked"
        })
}