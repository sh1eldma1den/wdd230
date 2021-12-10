const requestURL = "https://sh1eldma1den.github.io/wdd230/chamber/js/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const businesses = jsonObject["businesses"];
    businesses.forEach((businesses) => {
    
    let card = document.createElement("section");
    let textSection = document.createElement("div");
    let h2 = document.createElement("h2");
    let category = document.createElement("p");
    let image = document.createElement("img"); 
    let paragraph1 = document.createElement("p"); 
    let paragraph2 = document.createElement("p"); 
    let paragraph3 = document.createElement("p"); 
    let paragraph4 = document.createElement("p");  

    textSection.setAttribute("class", "text-area")
    h2.textContent = `${businesses.name}`;
    category.textContent = `${businesses.category}`;
    paragraph1.textContent = `Address: ${businesses.address}`; 
    paragraph2.textContent = `Phone: ${businesses.phone}`; 
    paragraph3.textContent = `Website: ${businesses.website}`; 
    paragraph4.textContent = `Member Since: ${businesses.joined}`;  
    image.setAttribute("src", `images/${businesses.photo}`);
    image.setAttribute("alt", `Logo of ${businesses.name}`); 
    image.setAttribute("id", '${businesses.photo-img}');

    textSection.appendChild(h2);
    textSection.appendChild(category);
    card.appendChild(image);
    textSection.appendChild(paragraph1);
    textSection.appendChild(paragraph2);
    textSection.appendChild(paragraph3);
    textSection.appendChild(paragraph4);
    card.appendChild(textSection);



      document.querySelector("div.cards").appendChild(card);
  }
)})
