//get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters for Intersection Observer
const imgOptions = {
  threshold: 0, //threshold of 1 really slows it down
  rootMargin: "0px 0px 100px 0px", //starts loading 100px below viewport
};
//setting src attribute, removing data-src attribute
const loadImages = (image) => {
  //this is an arrow function - read up on this
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
//Intersection Observer will load target images only when the user scrolls down, causing them to display in the viewport.
//first check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  //loop through each img and check status and load if necessary
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  //load all images if Intersection Observer not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
