const today = new Date();
const options = { weekday: "short" };
let forecastDay0 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000 
);
let forecastDay1 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000 * 2
);
let forecastDay2 = new Intl.DateTimeFormat("en-US", options).format(
  today.getTime() + 86400000 * 3
);

let forecastDay = [
  forecastDay0,
  forecastDay1,
  forecastDay2,
];

for (let i = 0; i < 3; i++) {
  document.getElementById(`forecast-day${[i]}`).textContent = forecastDay[i];

}

const apiForecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.56&lon=-81.71&exclude=minutely&appid=b599c9492b477e55d6b80923d6abd3ea&units=imperial";
fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    for (let j = 0; j < 3; j++) {

      document.querySelector(`#forecast-temp${[j]}`).innerHTML = `${jsObject.daily[j].temp.day.toFixed()} &#8457`;
      
      const imagesrc = `https://openweathermap.org/img/w/${jsObject.daily[j].weather[0].icon}.png`;
      const forecastDescription = jsObject.daily[j].weather.description;
      
      document.querySelector(`#forecast-icon${[j]}`).setAttribute("src", imagesrc);
      document.querySelector(`#forecast-icon${[j]}`).setAttribute("alt", forecastDescription);
    }
  })
  
