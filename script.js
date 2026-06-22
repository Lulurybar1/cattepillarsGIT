const fortunes = [
  {
    text: "Mňau, vidím, že dnes nájdeš schované pokojové rastliny... alebo aspoň ich lístok.",
    ball: "images/fortune-ball.svg",
    ballAlt: "Magická veštidlová guľa s fialovým leskom"
  },
  {
    text: "Tvoj deň bude mäkký ako vankúš, ale aj s jedným malým prekvapením pri dverách.",
    ball: "images/fortune-ball-stars.svg",
    ballAlt: "Veštidlová guľa so žiariacimi hviezdami"
  },
  {
    text: "Pozor! Niekto ti dnes ukradne stoličku... ale ja ti ju požičiam, keď budem chcieť spať.",
    ball: "images/fortune-ball-smoke.svg",
    ballAlt: "Veštidlová guľa s tajomným dymom"
  },
  {
    text: "Mňau, tvoja myseľ je jasná; škriatkovia v mlieku ti čoskoro prinesú dobrú správu.",
    ball: "images/fortune-ball-stars.svg",
    ballAlt: "Veštidlová guľa so žiariacimi hviezdami"
  },
  {
    text: "Cítim pach maškŕt. Ak budeš mať trpezlivosť, príde odmena v podobe praskajúceho tvarohu.",
    ball: "images/fortune-ball-smoke.svg",
    ballAlt: "Veštidlová guľa s tajomným dymom"
  },
  {
    text: "Dnešná noc bude plná tichého štebotu a pekných snov, ak si uložíš hlavu na moje kolená.",
    ball: "images/fortune-ball.svg",
    ballAlt: "Magická veštidlová guľa s fialovým leskom"
  },
  {
    text: "Odpoveď je áno, ak sa nebudeš báť začať jemne a s jemnou tlapkou.",
    ball: "images/fortune-ball.svg",
    ballAlt: "Magická veštidlová guľa s fialovým leskom"
  },
  {
    text: "Tvoja cesta bude mať mäkké kroky a jedno prekvapenie v taške. Sleduj čierne pruhy na svetle.",
    ball: "images/fortune-ball-stars.svg",
    ballAlt: "Veštidlová guľa so žiariacimi hviezdami"
  }
];

const button = document.getElementById("fortuneButton");
const fortuneText = document.getElementById("fortuneText");
const ballImage = document.getElementById("ballImage");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];
  fortuneText.textContent = fortune.text;
  ballImage.src = fortune.ball;
  ballImage.alt = fortune.ballAlt;
  button.textContent = "My!";
  fortuneText.classList.add("reveal");
});

function init() {
  fortuneText.textContent = "Mňau... stlač ma a ja ti poviem, čo vidím.";
  ballImage.src = "images/fortune-ball.svg";
  ballImage.alt = "Magická veštidlová guľa s fialovým leskom";
}

init();
