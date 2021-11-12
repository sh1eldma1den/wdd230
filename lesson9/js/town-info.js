const requestURL = "js/towns.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p2 = document.createElement('p2');
      let paragraph1 = document.createElement('p'); // Updates
      let paragraph2 = document.createElement('p'); // Updates
      let paragraph3 = document.createElement('p'); // Updates
      let image = document.createElement('img') // Updates

      h2.textContent = towns[i].name;
      p2.textContent = "motto";
      paragraph1.textContent = "yearFounded"; // Updates
      paragraph2.textContent = "currentPopulation"; // Updates
      paragraph3.textContent = "averageRainfall"; // Updates
      image.setAttribute('src', towns[i].photo);
      image.setAttribute('alt', 'image of ' + towns[i].name); // Updates
        

      card.appendChild(h2);
      card.appendChild(p2);
      card.appendChild(paragraph1);
      card.appendChild(paragraph2);
      card.appendChild(paragraph3);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
  }
  
});