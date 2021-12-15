# Forage the Bay 
## [Live Site](https://maisiejillbt.github.io/ForageTheBay/)

### Find what you can forage and where with Forage the Bay, a data visualization tool for foragers of all experience levels. 

![](https://github.com/maisiejillbt/ForageTheBay/blob/f90c812d70b6cc951ba3a3e4b4ad18e3d226f660/dist/assets/gifs/forage-intro.gif)

With Forage the Bay you can easily find a food to forage in your area no matter the season! Forage the Bay is made up of data from my personal knowledge of the bay area as well as information from California State Parks and Forests. 
The main map to the left of the page can be easily interacted with, you can select your current season, and the area you want to visit, this will bring up information and regulations for your selected park as well as the available foods during that season. For more information and identification, I have included links to each foods wikipedia page. 

# Features
*** 

## Interactive SVG Map 

Working on Forage the Bay was my first experience both designing and working with SVG's through DOM manipulation, and I really enjoyed it! My main map is one single SVG document, this made positioning and resizeing a breeze. However building out my my map in this way meant that if I were to load it as an image, I wouldnt have access to the different classes and ids within the SVG. This lead me to the decision to load the map from seperate js file as a script. 

``` javascript 

document.write('\
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
          viewBox="0 0 612 792" style="enable-background:new 0 0 612 792;" xml:space="preserve">\
        <g id="springUnderline" class="underline spring intro">\
	        <rect x="5.64" y="327.45" width="138.18" height="14.59"/>\
        </g>\
         // giving me access to ids and classes to manipulate through js \
        <g id="spring" class="season" pointer-events="bounding-box">\
          <g>\')
``` 

### This gave the ability to add SCSS styling, animation, and user interaction to individual sections of the SVG. 

![](https://github.com/maisiejillbt/ForageTheBay/blob/f90c812d70b6cc951ba3a3e4b4ad18e3d226f660/dist/assets/gifs/forage-map.gif)

## Dynamically loaded Sidebars 

With the user interaction from the Map I was able to dynamically load both information about the selected park, as well as a sidebar of foods you can legally forage in the park. 

``` javascript 

// pulled from data filtering

function filterFood(park, season) {
  const filtered = [];
  foods.forEach(element => {
    if (element['park'] === park && element['season'] === season) {
      filtered.push(element);
    }
  });
  return filtered;
}

// pulled from Food class 

class Food {
  constructor(foodId, name, park, season, url, photo, description){
    this.foodId = foodId;
    this.name = name; 
    this.park = park; 
    this.season = season;
    this.url = url;
    this.photo = photo;
    this.description = description;
  }

  generateFoodSidebar() {
    const foodSidebar = document.querySelector('.food-sidebar');
    const foodIcon = document.createElement('img');
    foodIcon.src = this.photo;
    foodIcon.id = `${this.foodId}`;
    foodIcon.classList.add('food-icon');
    foodSidebar.appendChild(foodIcon);
  }
  //...
 } 

```

![](https://github.com/maisiejillbt/ForageTheBay/blob/f90c812d70b6cc951ba3a3e4b4ad18e3d226f660/dist/assets/gifs/forage-foods.gif)

## Technologies 

This project uses Vanilla JavaScript and SCSS. 


# Thank you to OHNO for the beautiful Swear Deck Display font. 
  - OHNO https://ohnotype.co/
