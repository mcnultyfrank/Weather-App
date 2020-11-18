"use strict";

var background = document.querySelector(".background");
var textInput = document.querySelector(".textInput");
var tempOutput = document.querySelector(".tempOutput");
var locOutput = document.querySelector(".locationOutput");
var conditionOutput = document.querySelector(".conditionOutput");
var body = document.querySelector(".body");
var country = document.querySelector(".countryOutput");
var weatherIcon = document.querySelector(".weatherIcon");
var sunrise = document.querySelector(".sunriseOutput");
var sunset = document.querySelector(".sunsetOutput");

var getApiData = function getApiData(location) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=666c971c72301aa3b8f1051cc87fced8").then(function (res) {
    return res.json();
  }).then(function (response) {
    var kelvinToCelcius = response.main.temp - 273.15;
    tempOutput.innerHTML = kelvinToCelcius.toFixed(1) + "°C";
    locOutput.innerHTML = response.name;
    conditionOutput.innerHTML = response.weather[0].main;
    country.innerHTML = response.sys.country;
    console.log(response);
    var sunriseUTC = response.sys.sunrise;
    var date = new Date(sunriseUTC * 1000);
    var timestr = date.toLocaleTimeString();
    console.log(date, timestr);

    if (kelvinToCelcius >= 20) {
      background.style.backgroundSize = "cover";
      background.style.backgroundImage = "url('./pexels-brett-sayles-1431822.jpg')";
    } else if (kelvinToCelcius <= 20 && conditionOutput.innerHTML != "Rain" && conditionOutput.innerHTML != "Clouds") {
      background.style.backgroundSize = "cover";
      background.style.backgroundImage = "url('./pexels-brett-sayles-1431822.jpg')";
    } else if (kelvinToCelcius <= 20 && conditionOutput.innerHTML == "Clouds") {
      background.style.backgroundSize = "cover";
      background.style.backgroundImage = "url('./cloudy.jpg')";
    } else if (kelvinToCelcius < 25 & conditionOutput.innerHTML == "Rain") {
      background.style.backgroundImage = "url('./pexels-johannes-plenio-2259232.jpg')";
    }

    if (response.weather[0].id >= 200 & response.weather[0].id <= 232) {
      weatherIcon.src = "http://openweathermap.org/img/wn/11d@2x.png";
    } else if (response.weather[0].id >= 300 & response.weather[0].id <= 321) {
      weatherIcon.src = "http://openweathermap.org/img/wn/09d@2x.png";
    } else if (response.weather[0].id >= 300 & response.weather[0].id <= 321) {
      weatherIcon.src = "http://openweathermap.org/img/wn/09d@2x.png";
    } else if (response.weather[0].id >= 500 & response.weather[0].id <= 504) {
      weatherIcon.src = "http://openweathermap.org/img/wn/10d@2x.png";
    } else if (response.weather[0].id >= 600 & response.weather[0].id <= 622) {
      weatherIcon.src = "http://openweathermap.org/img/wn/13d@2x.png";
    } else if (response.weather[0].id >= 701 & response.weather[0].id <= 781) {
      weatherIcon.src = "http://openweathermap.org/img/wn/50d@2x.png";
    } else if (response.weather[0].id == 800) {
      weatherIcon.src = "http://openweathermap.org/img/wn/01d@2x.png";
    } else if (response.weather[0].id >= 801 & response.weather[0].id <= 804) {
      weatherIcon.src = "http://openweathermap.org/img/wn/03d@2x.png";
    }
  });
};

textInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    getApiData(e.target.value);
    textInput.value = "";
  }
});