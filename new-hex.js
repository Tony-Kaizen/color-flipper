const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const main = document.getElementById('main');
const bg = main.querySelectorAll('.bg');
const colors = main.querySelectorAll('.color');

btn.addEventListener("click", function () {
  for (let i = 0; i <= 3; i++) {
    const hex = getRandomColor();

    bg[i].style.backgroundColor = hex;
    colors[i].textContent = hex;
  }

});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function getRandomColor() {
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  return hexColor;
}