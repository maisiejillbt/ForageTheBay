const data = require("./data.js")
const food = require("./food.js")
const park = require("./park.js")


class View {
  constructor() {
    this.season = 'spring';
    this.park = 'SP';
    this.food;
  }

  changeSeason(season){
    this.season = season;
  }

  changePark(park){
    this.park = park; 
  }

  displayFoods(foods) {
    const foodSidebar = document.querySelector('.food-sidebar');// removing previous foods
    foodSidebar.innerHTML = "";
    const foodInfoContainer = document.querySelector('.food-container');
    foodInfoContainer.innerHTML = "";

    for(let i = 0; i < foods.length; i++){
      let currentFood = foods[i];
      let foodObj = new food.Food( // creating new food object
        currentFood.foodId,
        currentFood.foodName,
        currentFood.park,
        currentFood.season,
        currentFood.wiki,
        currentFood.photo);

      foodObj.generateFoodSidebar(); // generating div and rendering
      foodObj.generateFoodInfo(); // generating div and rendering

    }
  }

  displayPark(currentPark) {
    const parkSidebar = document.querySelector('.park-sidebar');
    parkSidebar.innerHTML = ""; //reset the info in sidebar
    currentPark = currentPark[0];
    let parkObj = new park.Park(
      currentPark.parkId,
      currentPark.parkName,
      currentPark.address,
      currentPark.hours,
      currentPark.parkDescription,
      currentPark.restrictions,
      currentPark.bagLimits,
      currentPark.fees
      );
    parkObj.generateParkDiv();
  }

  mapClickHandler(park,season){
    prevSeasonUnderline = document.querySelector(`#${this.season}Underline`);
    prevSeasonUnderline.style.display = "none"; 

    !park ? park = this.park : this.changePark(park);
    !season ? season = this.season : this.changeSeason(season);

    newSeasonUnderline = document.querySelector(`#${season}Underline`);
    newSeasonUnderline.style.display = "block"; 
  
    
    let parkData = data.filterPark(this.park);
    let foods = data.filterFood(this.park,this.season);

    this.displayPark(parkData);
    this.displayFoods(foods);

    this.addFoodOnClicks() // can only add the listeners after the items are generated and displayed
 
  }

  foodClickHandler(foodId){
    if (this.food) {
      this.food.style.display = 'none'; // check if there was a food displayed previously
    }
    this.food = document.getElementById(`${foodId}`);
    this.food.style.display = 'block';
  }

  addFoodOnClicks() { // cannot be done at run time because divs are dynamically generated
    foodIcons = document.querySelectorAll('.food-icon'); 
    for (let i =0; i < foodIcons.length; i++) {
      let food = foodIcons[i]; 
      food.addEventListener('click', this.foodClickHandler.bind(this,food.id))
    }
  }


  addOnClicks(){
    let spring = document.querySelector('#spring')
    let summer = document.querySelector('#summer')
    let autumn = document.querySelector('#autumn')
    let winter = document.querySelector('#winter')

    spring.addEventListener("click", this.mapClickHandler.bind(this,'','spring'));
    summer.addEventListener("click", this.mapClickHandler.bind(this,'','summer'));
    autumn.addEventListener("click", this.mapClickHandler.bind(this,'','fall'));
    winter.addEventListener("click", this.mapClickHandler.bind(this,'','winter'));

    let SP = document.querySelector('#SP')
    let RP = document.querySelector('#RP')
    let GG = document.querySelector('#GG')

    SP.addEventListener("click", this.mapClickHandler.bind(this,'SP',''));
    RP.addEventListener("click", this.mapClickHandler.bind(this,'PR',''));
    GG.addEventListener("click", this.mapClickHandler.bind(this,'GG',''));
  }

}

module.exports = View;