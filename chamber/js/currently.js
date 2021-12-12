
const apiURL ="https://api.openweathermap.org/data/2.5/onecall?lat=33.56&lon=-81.71&exclude=minutely&appid=b599c9492b477e55d6b80923d6abd3ea&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    console.log(jsObject); //for testing
    //console.log(Math.round(jsObject.current.temp)); //for testing

    //populate "temperature" span
    document.querySelector("#temperature").textContent = Math.round(jsObject.current.temp);
    //populate "currently" span and change to upper case
    document.querySelector("#currently").textContent = jsObject.current.weather[0].main;  
    //populate "humidity" span
    document.querySelector("#humidity").textContent = Math.round(jsObject.current.humidity);

  });

 