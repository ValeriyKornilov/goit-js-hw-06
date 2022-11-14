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

// отримуємо посилання на батьківський UL
const galleryContainer = document.querySelector(".gallery");

// будуємо розмітку вмісту UL, використовуючи шаблонні рядки
const galleryInnerMarkup = ({ url, alt }) => {
  return `<li><img class="gallery__img" src="${url}" alt="${alt}" width="320" /></li>`;
};

// перебираємо через MAP масив IMAGES на кожній ітерації використовуючи наш шаблон
const makeGalleryMarkup = images
  .map(galleryInnerMarkup)
  // прибираємо пунктуацію
  .join("");

// вставляємо отриману розмітку в батьківський елемент в HTML
galleryContainer.insertAdjacentHTML("beforeend", makeGalleryMarkup);
