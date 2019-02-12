var cardContainer = document.querySelector("#card-container");
var cardFront = document.querySelector("#front");
var cardBack = document.querySelector("#back");
var cardTitle = document.querySelector("#title");

var i = 0;

var content = [
  {
    color: "#40D0ED",
    text: "Software Engineer"
  },
  {
    color: "#F54064",
    text: "Systems Architect"
  },
  {
    color: "#F5D940",
    text: "Web Developer"
  },
  {
    color: "#4D613B",
    text: "Digital Product Designer"
  }
];

VanillaTilt.init(cardContainer, {
  reverse: true,
  scale: 1.1,
  glare: true
});

// glareContainer only exists after the VanillaTilt init call above
var glareContainer = document.querySelector(".js-tilt-glare");

cardContainer.addEventListener("click", onCardClick);

// Set the front and back so we have initial data
changeFront();
changeBack();

function onCardClick(event) {
  // If the card is flipped from the back to the front
  if (cardContainer.classList.contains("flip")) {
    i++;

    changeFront();

    // Only change the back after it's invisible
    setTimeout(function() {
      changeBack();
    }, 600); // 600ms === duration of hide animation
  }

  cardContainer.classList.toggle("flip");

  glareContainer.classList.add("hide");

  setTimeout(function() {
    glareContainer.classList.remove("hide");
  }, 400); // 600ms === duration of hide animation
}

function changeFront() {
  var index = i % content.length;
  cardFront.style.backgroundColor = content[index].color;
}

function changeBack() {
  var index = i % content.length;
  cardTitle.innerText = content[index].text;
  cardTitle.style.color = content[index].color;
}
