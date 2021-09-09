function generateIntro() {
  const introBox = document.querySelector('.introBox');
  console.log(introBox)
  const welcome = document.createElement('h1');
  const intro = document.createElement('p');

  welcome.innerText = "Welcome to Forage the Bay";
  intro.innerText = 
  `I created Forage the Bay as an 
  easy to use visual tool for foragers of all 
  skill levels. To get started click on 
  one of the three highlighted public parks`;

  welcome.id = 'introHeader';
  intro.classList.add('introText');

  introBox.appendChild(welcome);
  introBox.appendChild(intro);
}

function introOnClick() {

}

export {generateIntro, introOnClick};