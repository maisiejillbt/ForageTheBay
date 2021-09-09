const data = require("./scripts/data.js")
const Food = require("./scripts/food.js")
const Park = require("./scripts/park.js")
const View = require("./scripts/view.js")
const Intro = require("./scripts/intro.js")


document.addEventListener("DOMContentLoaded", () => {
  let view = new View();
  Intro.generateIntro(); //>>> working on getting the positioning right :( 
  view.addOnClicks();
});
