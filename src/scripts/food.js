class Food {
  constructor(foodId, name, park, season, url, photo){
    this.foodId = foodId;
    this.name = name; 
    this.park = park; 
    this.season = season;
    this.url = url;
    this.photo = photo;
  }

  generateFoodSidebar() {
    const foodSidebar = document.querySelector('.food-sidebar');
    const foodIcon = document.createElement('img');

    foodIcon.src = this.photo;
    foodIcon.id = `${this.foodId}`;
    foodIcon.classList.add('food-icon');


    foodSidebar.appendChild(foodIcon);
  }

  generateFoodInfo() { 
    const foodInfoContainer = document.querySelector('.food-container');

    const foodDiv = document.createElement('div');
    const foodName = document.createElement('h2');
    const foodURL = document.createElement('a');

    foodDiv.classList.add('food-info');
    foodDiv.id = `${this.foodId}`;
    
    foodName.innerText = `${this.name}`;
  
    foodURL.href = `${this.url}`;
    foodURL.innerText = `More information on ${this.name}`;

    foodDiv.appendChild(foodName);
    foodDiv.appendChild(foodURL);

    foodInfoContainer.appendChild(foodDiv);
  }
}

export {Food};

