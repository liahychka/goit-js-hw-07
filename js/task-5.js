function getRandomHexColor() {
      // changeColor.classList.toggle('color');
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');
changeColor.addEventListener('click', changeBody);

function changeBody() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector('.color').textContent = newColor;
}