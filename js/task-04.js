const counterEl = document.querySelector("#value");
const counterIncrementBtn = document.querySelector('[data-action="increment"]');
const counterDecrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

counterIncrementBtn.addEventListener("click", add);
counterDecrementBtn.addEventListener("click", remove);

function add() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}
function remove() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}
