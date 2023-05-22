//! page acceuil
const colorsTab = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

// recuperer mon listener ( le boutton)
const btn = document.querySelector('.btn');
const body = document.querySelector('.body');
const span = document.querySelector('.color');

// fonction qui change la couleur background du site
function changeColor() {
  const choix = Math.floor(Math.random() * colorsTab.length);
  //  a chaque click add la couleur dans le span en "texte"
  span.textContent = colorsTab[choix];
  body.style.backgroundColor = colorsTab[choix];
}
btn.addEventListener('click', changeColor);
