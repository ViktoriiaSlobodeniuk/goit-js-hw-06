const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const markup = images
  .map(
    (image) =>
      `<li><img class="img" width=300 height=200 src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

const galleryEl = document.querySelector("ul");
galleryEl.insertAdjacentHTML("afterbegin", markup);
galleryEl.style.listStyle = "none";
galleryEl.style.padding = "0";
galleryEl.style.display = "flex";
galleryEl.style.justifyContent = "center";
galleryEl.style.gap = "15px";
const backEl = document.querySelector("body");
backEl.style.backgroundColor = "teal";
