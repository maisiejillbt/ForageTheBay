const data = require("./data.js")
const food = require("./food.js")
const park = require("./park.js")
const intro = require("./intro.js")


class View {
  constructor() {
    this.season = 'spring';
    this.park = 'SP';
    this.food;
    this.intro = document.querySelector(".intro")
    this.intro1Complete = false;
    this.intro2Complete = false;
    this.addOnClicks();
    intro.generateIntro()
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
        currentFood.photo,
        currentFood.description);

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


  changeSeason(season){
    this.season = season;
  }

  changePark(park){
    this.park = park; 
  }

  displayParkAndFoods(){
    let parkData = data.filterPark(this.park);
    let foods = data.filterFood(this.park,this.season);
    this.displayPark(parkData);
    this.displayFoods(foods);
    this.addFoodOnClicks() // can only add the listeners after the items are generated and displayed

    if(!this.intro1Complete) {
      intro.clearMapIntroAnimation();
      intro.startIntro2();
      this.intro1Complete = true; 
    };
  }

  parkClickHandler(park){
    this.changePark(park);
    //displaying park & food data
    this.displayParkAndFoods();
  }

  seasonClickHandler(season){
    // adding and removing underlines from season
    const prevSeasonUnderline = document.querySelector(`#${this.season}Underline`);
    prevSeasonUnderline ? prevSeasonUnderline.style.display = "none" : null; 
    this.changeSeason(season);
    const newSeasonUnderline = document.querySelector(`#${season}Underline`);
    newSeasonUnderline.style.display = "block";
    //displaying park & food data
    this.displayParkAndFoods();
  }

  foodClickHandler(foodId){
    if (this.food) {
      this.food.style.display = 'none'; // check if there was a food displayed previously and remove them
    }
    this.food = document.getElementById(`${foodId}`);
    this.food.style.display = 'block';

    // removing second intro 
    if(!this.intro2Complete) {
      this.removeEle('intro', 'intro2');
      this.intro2Complete = true;
    };
  }

  addFoodOnClicks() { // cannot be done at run time because divs are dynamically generated
    const foodIcons = document.querySelectorAll('.food-icon'); 
    for (let i =0; i < foodIcons.length; i++) {
      let food = foodIcons[i]; 
      food.addEventListener('click', this.foodClickHandler.bind(this,food.id))
    };
  }

  addOnClicks(){ 
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