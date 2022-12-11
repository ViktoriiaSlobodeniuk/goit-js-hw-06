const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.textContent = ingredient;
  ingredientItemEl.classList.add("item");
  return ingredientItemEl;
});

ingredientsEl.append(...elements);
