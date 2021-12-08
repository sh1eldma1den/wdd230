
const apiURL ="https://api.openweathermap.org/data/2.5/onecall?lat=33.56&lon=-81.71&exclude=minutely&appid=b599c9492b477e55d6b80923d6abd3ea&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //console.log(jsObject.list[0].main.temp);

    const temperature = Math.round(jsObject.list[0].main.temp);
    document.querySelector("#temperature").textContent = temperature;
    
    document.querySelector("#currently").textContent = jsObject.list[0].weather[0].description.toUpperCase();  
  

    document.querySelector("#humidity").textContent = Math.round(jsObject.list[0].main.humidity);
    
    
  });

 