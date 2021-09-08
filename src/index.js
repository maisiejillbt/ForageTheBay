const data = require("./scripts/data.js")
const Food = require("./scripts/food.js")
const Park = require("./scripts/park.js")
const View = require("./scripts/view.js")


document.addEventListener("DOMContentLoaded", () => {
  let view = new View();
  view.addOnClicks();
});
