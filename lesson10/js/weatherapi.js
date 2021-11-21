const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b599c9492b477e55d6b80923d6abd3ea&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = document.querySelector('#current-temp');
        const weatherIcon = document.querySelector('#imagesrc');

        currentTemp.textContent = jsObject.main.temp;
        let imgsrc = 'https://openweathermap.org/img/w/$(jsObject.weather[0].icon).png';
        let imgalt = jsObject.weather[0].description;

        weatherIcon.setAttribute('src', imgsrc);
        weatherIcon.setAttribute('alt', imgalt);
    });