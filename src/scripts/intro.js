// ===== Exported functions =====

export const generateIntro = () => { 
  const introBox = document.querySelector('.intro');
  introBox.appendChild(generateIntro1());
  addIntroUnderlines();
}

export const startIntro2 = () => {
  const introBox = document.querySelector('.intro');
  const intro2 = document.createElement('div'); 

  intro2.id = "intro2";
  const foodsIntro = document.createElement('h3'); 
  foodsIntro.innerText = `Click a food icon to see more information about that food`
  intro2.appendChild(foodsIntro);
  introBox.append(intro2);
}

export const clearMapIntroAnimation = () => {
  const parks = document.querySelectorAll('.park'); 
  removeIntroUnderlines();
  removeEle('intro','intro1');
  if (parks[0].id === "parkShadow") {
    for (let i = 0; i < 3; i++) {
      parks[i].removeAttribute('id');
    }
  } 
}

// ===== Non-Exported Functions =====

function generateIntro1(){
  const intro1 = document.createElement('div');
  intro1.id = "intro1";
  const welcome = document.createElement('h1');
  const intro = document.createElement('p');
  const dirs = document.createElement('h3');

  welcome.innerText = "Welcome";
  intro.innerText = 
  `I created Forage the Bay as an easy to use visual 
  tool for foragers of all skill levels.`;
  dirs.innerText = 
  `To get started click on one of the 
  highlighted public parks or seasons`;

  intro1.appendChild(welcome);
  intro1.appendChild(intro);
  intro1.appendChild(dirs);

  return intro1; 
}

function addIntroUnderlines(){
  const underlines = document.querySelectorAll('.underline'); 
  for(let i=0; i<4; i++){
    underlines[i].style.display = 'block';
  }
}

function removeIntroUnderlines(){
  const underlines = document.querySelectorAll('.underline'); 
  for(let i=0; i<4; i++){
    i > 0 ? underlines[i].style.display = 'none' : null;
    underlines[i].classList.remove("intro");
  }
}

function removeEle(parentClass, removeId){
  const removeEle = document.getElementById(removeId); 
  const parentEle = document.querySelector(`.${parentClass}`)
  parentEle.removeChild(removeEle); 
}


