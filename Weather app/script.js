
let apiKey = "d8fbe136022639ef34ba986502a8192b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector('.search input')
let searchBtn = document.querySelector('.search button')
let weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();


  document.querySelector('.city').innerHTML = data.name
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
  document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'

  document.querySelector('.weather').style.display = 'block'

  if (data.weather[0].main == 'Clouds') {
    weatherIcon.src = 'images/clouds.png'
  } else if (data.weather[0].main == 'Clear') {
    weatherIcon.src = 'images/clear.png'
  } else if (data.weather[0].main == 'Rain') {
    weatherIcon.src = 'images/rain.png'
  } else if (data.weather[0].main == 'Drizzle') {
    weatherIcon.src = 'images/drizzle.png'
  } else if (data.weather[0].main == 'Mist') {
    weatherIcon.src = 'images/mist.png'
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);

})