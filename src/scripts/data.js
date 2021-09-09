const foods = require('../data/foods.json');
const parks = require('../data/parks.json');


function filterFood(park, season) {
  const filtered = [];
  foods.forEach(element => {
    if (element['park'] === park && element['season'] === season) {
      filtered.push(element);
    }
  });
  return filtered;
}

function filterPark(parkId) {
  const filtered = []; 
  parks.forEach(element => {
    if (element['parkId'] === parkId){
      filtered.push(element);
    }
  });
  return filtered;
}

export {filterFood, foods, filterPark, parks};





