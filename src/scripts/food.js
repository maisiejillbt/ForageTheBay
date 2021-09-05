class Food {
  constructor(name, park, season, url, photo){
    this.name = name; 
    this.park = park; 
    this.season = season;
    this.url = url; 
    this.photo = photo;
  }

  generateFoodDiv() {

    const foodSidebar = document.querySelector('.food-sidebar');
    const foodDiv = document.createElement('div');
    const foodName = document.createElement('h3');
    const foodURL = document.createElement('a');


    foodDiv.classList.add('food-info');
    foodName.innerText = `${this.name}`;
    foodURL.href = `${this.url}`;
    foodURL.innerText = `More information on ${name}`;

    foodDiv.appendChild(foodName);
    foodDiv.appendChild(foodURL);

    foodSidebar.appendChild(foodDiv); // why is food div a node here but isnt one when returned
  }
}

// module.exports = Food;

// function Food(name, park, season, url, photo) {
//   this.name = name; 
//   this.park = park; 
//   this.season = season;
//   this.url = url; 
//   this.photo = photo;
// }

// Food.prototype.generateFoodDiv = function () {
//     const foodSidebar = document.querySelector('.food-sidebar');
//     const foodDiv = document.createElement('div');
//     const foodName = document.createElement('h3');
//     const foodURL = document.createElement('a');


//     foodDiv.classList.add('food-info');
//     foodName.innerText = `${this.name}`;
//     foodURL.href = `${this.url}`;
//     foodURL.innerText = `More information on ${name}`;

//     foodDiv.appendChild(foodName);
//     foodDiv.appendChild(foodURL);
//     foodSidebar.appendChild(foodDiv); // why is food div a node here but isnt one when returned
//   }

export {Food};  //why????? 

