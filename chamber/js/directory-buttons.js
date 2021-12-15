//cards = document.getElementById("cards");

//document.addEventListener("click", function (event) {
 // if (!event.target.matches(".list")) return;
//alert()
  // List view
 // event.preventDefault();
//  cards.classList.add("list");
//});

//document.addEventListener("click", function (event) {
// if (!event.target.matches(".grid")) return;

  // List view
//  event.preventDefault();
//  cards.classList.remove("list");
//});

toggle = document.getElementById('cards');

document.getElementById("grid").addEventListener("click", myToggle());
document.getElementById("list").addEventListener("click", myToggle());

function myToggle(){

  console.log(toggle.classList);

  if (toggle.classList.contains("grid")){
    toggle.classList.remove("grid");
    toggle.classList.add("list");
  }
  else{
    toggle.classList.remove("list");
    toggle.classList.add("grid");
  }
};