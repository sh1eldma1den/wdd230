const apiURL ="//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b599c9492b477e55d6b80923d6abd3ea&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    console.log(jsObject.list[0].main.temp);

    const temperature = Math.round(jsObject.list[0].main.temp);
    document.querySelector("#temperature").textContent = temperature;
    
    document.querySelector("#currently").textContent = jsObject.list[0].weather[0].description.toUpperCase();  
  
    const windspeed = Math.round(jsObject.list[0].wind.speed);
    document.querySelector("#windSpeed").textContent = windspeed;
 


    document.querySelector("#humidity").textContent = Math.round(jsObject.list[0].main.humidity);
    

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
