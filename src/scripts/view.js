const data = require("./data.js");
const intro = require("./intro.js");
import Food from "./food.js";
import Park from "./park.js"; 


class View {
  constructor() {
    this.season = 'spring';
    this.park = 'SP';
    this.currentFoodDetails;
    this.intro = document.querySelector(".intro")
    this.intro1Complete = false;
    this.intro2Complete = false;

    this.addMapOnClicks();
    intro.generateIntro();
  }

  displayFoods(foods) {
    const foodSidebar = document.querySelector('.food-sidebar');// removing previous foods
    foodSidebar.innerHTML = "";
    const foodInfoContainer = document.querySelector('.food-container');
    foodInfoContainer.innerHTML = "";
    for(let i = 0; i < foods.length; i++){
      let currentFood = foods[i];
      let foodObj = new Food( // creating new food object
        currentFood.foodId, currentFood.foodName,
        currentFood.park, currentFood.season,
        currentFood.wiki, currentFood.photo,
        currentFood.description);
      foodObj.generateFoodSidebar(); // generating div and rendering
      foodObj.generateFoodInfo(); // generating div and rendering
    }
  }

  displayPark(currentPark) {
    const parkSidebar = document.querySelector('.park-sidebar');
    parkSidebar.innerHTML = ""; //reset the info in sidebar
    currentPark = currentPark[0];
    let parkObj = new Park(
      currentPark.parkId, currentPark.parkName,
      currentPark.address, currentPark.hours,
      currentPark.parkDescription, currentPark.restrictions,
      currentPark.bagLimits, currentPark.fees
      );
    parkObj.generateParkDiv();
  }

  parkClickHandler(park){
    this.park = park; 
    //displaying park & food data
    this.displayParkAndFoods();
  }

  seasonClickHandler(season){
    // adding and removing underlines from season
    const prevSeasonUnderline = document.querySelector(`#${this.season}Underline`);
    prevSeasonUnderline ? prevSeasonUnderline.style.display = "none" : null; 
    const newSeasonUnderline = document.querySelector(`#${season}Underline`);
    newSeasonUnderline.style.display = "block";
    //displaying park & food data
    this.season = season;
    this.displayParkAndFoods();
  }

  displayParkAndFoods(){
    let parkData = data.filterPark(this.park);
    let foods = data.filterFood(this.park,this.season);
    this.displayPark(parkData);
    this.displayFoods(foods);
    this.addFoodOnClicks(); // can only add the listeners after the items 
    //are generated and displayed

    // starting second intro box 
    if(!this.intro1Complete) {
      intro.startIntro2();
      this.intro1Complete = true; 
    };
  }

  foodClickHandler(foodId){
    if (this.currentFoodDetails) {
      // check if there were food details displayed previously and remove them
      this.currentFoodDetails.style.display = 'none'; 
    }
    // update and display the selected foods details
    this.currentFoodDetails = document.getElementById(`${foodId}`);
    this.currentFoodDetails.style.display = 'block';

    // removing second intro if applicable 
    if(!this.intro2Complete) {
      this.removeEle('intro', 'intro2');
      this.intro2Complete = true;
    };
  }

  addFoodOnClicks() { // cannot be done with other onClicks because foods arent yet displayed
    const foodIcons = document.querySelectorAll('.food-icon'); 
    for (let i =0; i < foodIcons.length; i++) {
      let food = foodIcons[i]; 
      food.addEventListener('click', this.foodClickHandler.bind(this,food.id));
    };
  }

  addMapOnClicks(){ 
    const seasons = ["spring", "summer", "fall", "winter"]; 
    for(let i = 0; i < 4; i++){
      let season = document.getElementById(seasons[i]);
      season.addEventListener("click", this.seasonClickHandler.bind(this,seasons[i]));
    }
    const parks = ['SP','PR','GG'];
    for(let i=0; i < 3; i++){
      let park = document.getElementById(parks[i]); 
      park.addEventListener("click", this.parkClickHandler.bind(this,parks[i]));
    }
  }

  removeEle(parentClass, removeId){
    const removeEle = document.getElementById(removeId); 
    const parentEle = document.querySelector(`.${parentClass}`)
    parentEle.removeChild(removeEle); 
  }
}

export default View;