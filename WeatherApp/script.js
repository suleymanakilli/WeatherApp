
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  data=fetch(`${URL}?q=${city}&appid=${API_KEY}`)
  return data;
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city).then(response=>{
    return response.json()
  }).then((data)=>{
    showWeatherData(data)
  }).catch((error)=>{
    console.log(error)
  })

}

showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText=weatherData.name
  document.getElementById("weather-type").innerText=weatherData.weather[0].main
  document.getElementById("temp").innerText=(parseInt(weatherData.main.temp)-273.15).toFixed(2)
  document.getElementById("min-temp").innerText=(parseInt(weatherData.main.temp_min)-273.15).toFixed(2)
  document.getElementById("max-temp").innerText=(parseInt(weatherData.main.temp_max)-273.15).toFixed(2)
  console.log(weatherData)
  
}
