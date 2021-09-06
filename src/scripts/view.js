const data = require("./data.js")
const food = require("./food.js")
const park = require("./park.js")


// setup initial view state (initiate the map)
// have all event listeners here
// initial state is summer


// season click handler 
  // call changeSeason() 
  // generate new map
  // call generate foods with new params
  // 

class View {
  constructor() {
    this.season = 'summer';
    this.park = 'GG' /// change to empty 
  }

  changeSeason(season){
    this.season = season;
  }

  changePark(park){
    this.park = park; 
  }

  displayFoods(foods) {
    for(let i = 0; i < foods.length; i++){
      let cF = foods[i];

      let foodObj = new food.Food( // creating new food object
        cF['foodName'],
        cF['park'],
        cF['season'],
        cF['wiki'],
        cF['photo'])

      foodObj.generateFoodDiv(); // generating div and rendering
    }
  }

  seasonClickHandler(season) {
    this.changeSeason(season);
    if (this.park) {
      let foods = data.filterFood(this.park,this.season);
      this.displayFoods(foods);
    }
  }

  parkClickHandler(park) {
    this.changePark(park);
    let foods = data.filterFood(this.park,this.season);
    this.displayFoods(foods);
  }

}

module.exports = View;