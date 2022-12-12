const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  createBoxes(inputEl.value);
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    const boxEl = document.createElement("div");

    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    boxesEl.append(boxEl);

    size += 10;
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
