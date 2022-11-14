// отримуємо доступ до елементів HTML
const changeColorButton = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const textEl = document.querySelector(".color");

// додаємо івент-лісенер
changeColorButton.addEventListener("click", onButtonClick);

// function onButtonClick() {
//   function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };
//   // додаємо згенероавний рандомний колір в інлайн-стиль елемента body
//   bodyEl.style.backgroundColor = getRandomHexColor();
//   // додаємо значення кольору в span
//   textEl.textContent = bodyEl.style.backgroundColor;
// };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick() {
  const color = getRandomHexColor();
  // додаємо згенероавний рандомний колір в інлайн-стиль елемента body
  bodyEl.style.backgroundColor = color;
  // додаємо значення кольору в span
  textEl.textContent = color;
}
