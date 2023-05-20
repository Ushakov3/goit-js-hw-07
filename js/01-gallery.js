import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

function createGalleryList(items) {
  const markup = items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
  return markup;
}

const cardMarkup = createGalleryList(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", cardMarkup);

galleryEl.addEventListener("click", onClick);

let instance;

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}

function closeModal() {
  instance.close();
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

document.addEventListener("keydown", handleKeyDown);
