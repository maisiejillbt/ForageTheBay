function generateIntro() { // I want to refactor this into at least two different fucntions
  const introBox1 = document.querySelector('.introBox1');
  const welcome = document.createElement('h1');
  const intro = document.createElement('p');
  const dirs = document.createElement('h3');
  welcome.innerText = "Welcome";
  intro.innerText = 
  `I created Forage the Bay as an easy to use visual tool for foragers of all skill levels.`;
  dirs.innerText = 
  `To get started click on one of the highlighted public parks or seasons`;

  welcome.id = 'introHeader';
  intro.classList.add('introText');
  dirs.id = 'directions';

  introBox1.appendChild(welcome);
  introBox1.appendChild(intro);
  introBox1.appendChild(dirs);

  const introBox2 = document.querySelector('.introBox2');
  const foodsIntro = document.createElement('h3'); 

  foodsIntro.id = 'foodIntro'
  foodsIntro.innerText = `Click a food icon to see more information about that food`
  introBox2.appendChild(foodsIntro)
  introBox2.style.display = 'none';
}

export {generateIntro};