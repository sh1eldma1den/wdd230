const currentVisit = new Date().getTime(); //get current milliseconds

//Access localStorage
const myStorage = window.localStorage;

//check for lastVisit in localStorage
if (myStorage.getItem("lastVisit")) {
  let previousVisit = myStorage.getItem("lastVisit");
  //subtract miliseconds and divide by 86400000 to convert to days - truncate to lowest whole day
  const daysPassed = Math.trunc((currentVisit - previousVisit) / 86400000);
  document.getElementById("daysSince").innerText = "It has been " + daysPassed + " days since your last visit to our gallery.";
} else {
  document.getElementById("daysSince").innerText = "This is your first visit to our gallery! Welcome!";
}
//reset lastVisit to currentVisit
myStorage.setItem("lastVisit", currentVisit);
