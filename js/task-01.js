const categoriesEl = document.querySelector("ul");
const itemOfCategoriesEl = categoriesEl.children;

console.log("Number of categories:", itemOfCategoriesEl.length);

for (const item of itemOfCategoriesEl) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
}
