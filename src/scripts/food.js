class Food {
  constructor(foodId, name, park, season, url, photo){
    this.foodId = foodId;
    this.name = name; 
    this.park = park; 
    this.season = season;
    this.url = url;
    this.photo = photo;
  }

  generateFoodDiv() { // this needs to be reworked into two functions
    const foodSidebar = document.querySelector('.food-sidebar');
    const foodDiv = document.createElement('div');
    const foodName = document.createElement('h2');
    const foodURL = document.createElement('a');
    const foodInfoContainer = document.querySelector('.food-container');
    const foodIcon = document.createElement('img');
    foodIcon.src = this.photo; // THIS IS A DUMMY IMAGE
    foodIcon.id = `${this.foodId}`;
    foodIcon.classList.add('food-icon');

    foodDiv.classList.add('food-info');
    foodDiv.id = `${this.foodId}`;
    
    foodName.innerText = `${this.name}`;
  
    foodURL.href = `${this.url}`;
    foodURL.innerText = `More information on ${this.name}`;

    foodDiv.appendChild(foodName);
    foodDiv.appendChild(foodURL);

    foodInfoContainer.appendChild(foodDiv);
    foodSidebar.appendChild(foodIcon);
  }
}

export {Food};

