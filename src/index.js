const data = require("./scripts/data.js")
const Food = require("./scripts/food.js")
const View = require("./scripts/view.js")


document.addEventListener("DOMContentLoaded", () => {
 //call new view
  let view = new View()
  view.seasonClickHandler('spring')

});
// console.log(view)



// let myElm = document.createElement("button");
// myElm.innerText = 'test';		// Change the text of the element
// myElm.style.color = 'red';	
// map = document.querySelector('.map-container');
// console.log(map)
// let blackberrys = new food.Food('blackberry', 'gg', 'summer', 'balckberry.com', 'someurl')

// let foodEle = blackberrys.generateFoodDiv("test", 'test.com')
// console.log(blackberrys.generateFoodDiv());

// map.appendChild(blackberrys.generateFoodDiv);