const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  createBoxes(inputEl.value);
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  let boxesMarkup = ``;
  for (let i = 1; i <= amount; i++) {
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;

    size += 10;
  }
  boxesEl.insertAdjacentHTML("beforeend", boxesMarkup);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
