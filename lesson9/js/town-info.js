const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    towns.forEach((towns) => {
        if (
          towns.name === "Preston" ||
          towns.name === "Soda Springs" ||
          towns.name === "Fish Haven"
        ) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let motto = document.createElement("p");
      let paragraph1 = document.createElement("p"); // Updates
      let paragraph2 = document.createElement("p"); // Updates
      let paragraph3 = document.createElement("p"); // Updates
      let image = document.createElement("img"); // Updates
      let townOrder = document.createElement("p");

      h2.textContent = `${towns.name}`;
      card.appendChild(h2);
      motto.textContent = `${towns.motto}`;
      card.appendChild(motto);
      paragraph1.textContent = `Year Founded: ${towns.yearFounded}`; // Updates
      card.appendChild(paragraph1);
      paragraph2.textContent = `Population: ${towns.currentPopulation}`; // Updates
      card.appendChild(paragraph2);
      paragraph3.textContent = `Average Rainfall: ${towns.averageRainfall}`; // Updates
     card.appendChild(paragraph3);
      image.setAttribute("src", `images/${towns.photo}`);
      image.setAttribute("alt", `Photo of ${towns.name}`); // Updates
    card.appendChild(image);
      
      if (towns.name === "Preston") {
        townOrder.textContent = 1;
        card.appendChild(townOrder);
      } else if (towns.name === "Soda Springs") {
        townOrder.textContent = 2;
        card.appendChild(townOrder);
      } else {
        townOrder.textContent = 3;
        card.appendChild(townOrder);
      }

      document.querySelector("div.cards").appendChild(card);
  }
});
});