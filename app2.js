//! page hex

const btn2 = document.querySelector('.btn2');
const body2 = document.querySelector('.body2');
const span2 = document.querySelector('.color2');

function colorsHex() {
  let colorsAlea = ['#'];
  const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  for (let i = 0; i < 6; i++) {
    colorsAlea.push(tab[Math.floor(Math.random() * tab.length)]);
  }
  colorsAlea = colorsAlea.join('');

  span2.textContent = colorsAlea;
  body2.style.backgroundColor = colorsAlea;
}

btn2.addEventListener('click', colorsHex);
