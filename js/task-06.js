const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (
    validationInputEl.value.length === Number(validationInputEl.dataset.length)
  ) {
    validationInputEl.classList.add("valid");
    validationInputEl.classList.remove("invalid");
  } else {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
}
