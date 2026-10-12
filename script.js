const startButton = document.getElementById("startButton");
const panel2 = document.getElementById("panel2");
const photoButton = document.getElementById("photoButton");
const photoReveal = document.getElementById("photoReveal");
const doorButton = document.getElementById("doorButton");
const sideScroll = document.getElementById("sideScroll");
const openDoorButton = document.getElementById("openDoorButton");
const doorMessage = document.getElementById("doorMessage");
const finalButton = document.getElementById("finalButton");
const finalReveal = document.getElementById("finalReveal");

startButton.addEventListener("click", function() {
  panel2.scrollIntoView({
    behavior: "smooth"
  });
});

photoButton.addEventListener("click", function() {
  photoReveal.style.display = "block";
});

doorButton.addEventListener("click", function() {
  sideScroll.scrollIntoView({
    behavior: "smooth"
  });
});

sideScroll.addEventListener("wheel", function(event) {
  event.preventDefault();
  sideScroll.scrollLeft += event.deltaY;
});

openDoorButton.addEventListener("click", function() {
  doorMessage.style.display = "block";
});

finalButton.addEventListener("click", function() {
  finalReveal.style.display = "block";
  finalButton.innerText = "It's Still There.";
});
