const background = document.querySelector(".background");
const textInput = document.querySelector(".textInput");
const tempOutput  = document.querySelector(".tempOutput");
const locOutput = document.querySelector(".locationOutput");
const conditionOutput = document.querySelector(".conditionOutput");
const body = document.querySelector(".body");
const country = document.querySelector(".countryOutput");
const weatherIcon = document.querySelector(".weatherIcon");
const sunrise = document.querySelector(".sunriseOutput");
const sunset = document.querySelector(".sunsetOutput");



const getApiData = (location) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+ location +`&appid=666c971c72301aa3b8f1051cc87fced8`)
    .then((res) => res.json())
    .then((response) => {
      const kelvinToCelcius = response.main.temp - 273.15;      
      tempOutput.innerHTML = kelvinToCelcius.toFixed(1) + ("°C");
      locOutput.innerHTML = response.name;
      conditionOutput.innerHTML = response.weather[0].main;     
      country.innerHTML = response.sys.country;
      console.log(response);
        const sunriseUTC = response.sys.sunrise;
        const date = new Date ( sunriseUTC * 1000);
        const timestr = date.toLocaleTimeString();
        console.log(timestr);
        const promise = new Promise ((resolve, reject) => {
          resolve(sunset.innerHTML= date.toLocaleTimeString())
          reject(new Error('failed to get'));
        })
        promise.then(time => {
          console.log(time);
        })
        .catch(err => console.log(err.message));

      if (kelvinToCelcius >= 20){
        background.style.backgroundSize = "cover";
        background.style.backgroundImage = "url('./pexels-brett-sayles-1431822.jpg')";
      }
      else if (kelvinToCelcius <= 20 && conditionOutput.innerHTML != "Rain" && conditionOutput.innerHTML != "Clouds"){
      background.style.backgroundSize = "cover";
      background.style.backgroundImage = "url('./pexels-brett-sayles-1431822.jpg')"
    }
    else if (kelvinToCelcius <= 20 && conditionOutput.innerHTML == "Clouds"){
      background.style.backgroundSize = "cover";
      background.style.backgroundImage = "url('./cloudy.jpg')"
    }
      else if (kelvinToCelcius < 25 & conditionOutput.innerHTML == "Rain"){
        background.style.backgroundImage = "url('./pexels-johannes-plenio-2259232.jpg')";
      }
 
      if (response.weather[0].id >= 200 & response.weather[0].id <= 232){
        weatherIcon.src = "http://openweathermap.org/img/wn/11d@2x.png";
      }
      else if (response.weather[0].id >= 300 & response.weather[0].id <= 321){
        weatherIcon.src = "http://openweathermap.org/img/wn/09d@2x.png";
      }
      else if (response.weather[0].id >= 300 & response.weather[0].id <= 321){
        weatherIcon.src = "http://openweathermap.org/img/wn/09d@2x.png";
      }
      else if (response.weather[0].id >= 500 & response.weather[0].id <= 504){
        weatherIcon.src = "http://openweathermap.org/img/wn/10d@2x.png";
      }
      else if (response.weather[0].id >= 600 & response.weather[0].id <= 622){
        weatherIcon.src = "http://openweathermap.org/img/wn/13d@2x.png";
      }
      else if (response.weather[0].id >= 701 & response.weather[0].id <= 781){
        weatherIcon.src = "http://openweathermap.org/img/wn/50d@2x.png";
      }
      else if (response.weather[0].id == 800){
        weatherIcon.src = "http://openweathermap.org/img/wn/01d@2x.png";
      }
      else if (response.weather[0].id >= 801 & response.weather[0].id <= 804){
        weatherIcon.src = "http://openweathermap.org/img/wn/03d@2x.png";
      }
    })
  } 
  textInput.addEventListener(("keyup"), e => {
    if (e.keyCode === 13){
      getApiData(e.target.value);
      document.querySelector(".container").style.display = "contents";
      textInput.value = "";
    }
  })

  


