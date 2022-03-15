import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector("div.gallery");

galleryItems.forEach((el) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = el.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = el.preview;
  galleryImage.dataSource = el.original;
  galleryImage.alt = el.description;

  galleryBox.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
});

galleryBox.addEventListener("click", (ev) => {
  ev.preventDefault();
});

galleryBox.onclick = (ev) => {
  basicLightbox
    .create(`<img width="1280" src = ${ev.target.dataSource}>`)
    .show();
};
