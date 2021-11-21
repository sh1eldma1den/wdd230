const apiURL ="http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b599c9492b477e55d6b80923d6abd3ea&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const temperature = jsObject.main.temp.toFixed(1);
    const windspeed = jsObject.wind.speed.toFixed(1);
    
    document.querySelector("#currently").textContent = jsObject.weather[0].description.toUpperCase();
    document.querySelector("#temperature").textContent = temperature;
    document.querySelector("#humidity").textContent = jsObject.main.humidity.toFixed(1);
    document.querySelector("#windSpeed").textContent = windspeed;

    //Calculates the wind chill. Returns "N/A" if wind speed is < 3mph and/or temp is >50 
    if (temperature <= 50 && windspeed > 3) {
      const windchill =
        35.74 +
        0.6215 * temperature -
        35.75 * Math.pow(windspeed, 0.16) +
        0.4275 * temperature * Math.pow(windspeed, 0.16);
      document.querySelector("#windChill").textContent = windchill.toFixed(1);
    } else {
      const windChillNA = "N/A";
      document.querySelector("#windChill").textContent = windChillNA;
    }
  });
