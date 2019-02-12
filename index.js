var cardContainer = document.querySelector("#card-container");

VanillaTilt.init(cardContainer, {
  reverse: true,
  scale: 1.1,
  glare: true
});

var glareContainer = document.querySelector(".js-tilt-glare");

cardContainer.addEventListener("click", function(event) {
  cardContainer.classList.toggle("flip");

  glareContainer.classList.add("hide");

  setTimeout(function() {
    glareContainer.classList.remove("hide");
  }, 400); // 600ms === duration of hide animation
});
