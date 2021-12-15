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

const target = document.getElementById("cards");
btn = document.getElementById("grid").addEventListener("click", myToggle());
document.getElementById("list").addEventListener("click", myToggle());

function myToggle(){

//  console.log(toggle.classList);

  if (target.style.display !== "grid"){
    //alert("grid found");
    target.style.display = "grid";
  
  }
  else {
    //alert("else");
    target.style.display = "list";
  
  }
};