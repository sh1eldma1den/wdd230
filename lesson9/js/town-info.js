const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    towns.forEach((towns) => {
        if (
          towns.name === "Preston" ||
          towns.name === "Soda Springs" ||
          towns.name === "Fish Haven"
        ) {
      let card = document.createElement("section");
      let textSection = document.createElement("div");
      let h2 = document.createElement("h2");
      let motto = document.createElement("p");
      let paragraph1 = document.createElement("p"); // Updates
      let paragraph2 = document.createElement("p"); // Updates
      let paragraph3 = document.createElement("p"); // Updates
      let image = document.createElement("img"); // Updates
      let townOrder = document.createElement("p");

      textSection.setAttribute("class", "text-area")
      h2.textContent = `${towns.name}`;
      motto.textContent = `${towns.motto}`;
      paragraph1.textContent = `Year Founded: ${towns.yearFounded}`; // Updates
      paragraph2.textContent = `Population: ${towns.currentPopulation}`; // Updates
      paragraph3.textContent = `Average Rainfall: ${towns.averageRainfall}`; // Updates
      image.setAttribute("src", `images/${towns.photo}`);
      image.setAttribute("alt", `Photo of ${towns.name}`); // Updates
      image.setAttribute("id", '${towns.photo}-img');

    textSection.appendChild(h2);
    textSection.appendChild(motto);
    textSection.appendChild(paragraph1);
    textSection.appendChild(paragraph2);
    textSection.appendChild(paragraph3);
    card.appendChild(textSection);
    card.appendChild(image);

    if (towns.name === "Preston") {
      card.setAttribute("id", "town1");
      card.appendChild(townOrder);
    } else if (towns.name === "Soda Springs") {
      card.setAttribute("id", "town2");
      card.appendChild(townOrder);
    } else {
      card.setAttribute("id", "town3");
      card.appendChild(townOrder);
    }

      document.querySelector("div.cards").appendChild(card);
  }
});
});