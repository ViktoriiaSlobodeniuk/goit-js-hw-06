const fontSizeControler = document.querySelector("#font-size-control");
const outputTextEl = document.querySelector("#text");

fontSizeControler.addEventListener("input", fontChanger);
function fontChanger() {
  outputTextEl.style.fontSize = `${fontSizeControler.value}px`;
}
