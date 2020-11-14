"use strict";

background = document.querySelector(".background");
textInput = document.querySelector(".textInput");
tempOutput = document.querySelector(".tempOutput");
locOutput = document.querySelector(".locationOutput");
conditionOutput = document.querySelector(".conditionOutput");
body = document.querySelector(".body"); // windspeedOutput = document.querySelector(".windspeedOutput");

weatherIcon = document.querySelector(".weatherIcon");

var getApiData = function getApiData(location) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=666c971c72301aa3b8f1051cc87fced8").then(function (res) {
    return res.json();
  }).then(function (response) {
    kelvinToCelcius = response.main.temp - 273.15;
    tempOutput.innerHTML = kelvinToCelcius.toFixed(1) + "°C";
    locOutput.innerHTML = response.name; // windspeedOutput.innerHTML = response.wind.speed + (" Mph");

    conditionOutput.innerHTML = response.weather[0].main;
    if (kelvinToCelcius >= 20) background.style.background = "radial-gradient(circle, rgba(249,127,59,1) 0%, rgba(232,97,67,1) 98%)";else if (kelvinToCelcius < 20 & kelvinToCelcius > 16 & conditionOutput.innerHTML != "Rain") background.style.background = "linear-gradient(90deg, rgba(242,233,107,1) 23%, rgba(242,190,92,1) 98%)";else if (kelvinToCelcius <= 16 & conditionOutput.innerHTML != "Rain") background.style.background = "linear-gradient(202deg, rgba(208,229,242,1) 40%, rgba(179,218,227,1) 55%)";else if (kelvinToCelcius < 25 & conditionOutput.innerHTML == "Rain") {
      background.style.background = "linear-gradient(90deg, rgba(29,82,115,1) 44%, rgba(1,40,64,1) 91%)";
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

  console.log(getApiData);
});