const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");

bodyEl.style.transitionDuration = "0.7s";

changeColorBtn.addEventListener("click", bodyColorChanger);

function bodyColorChanger() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
