function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");

controlEl.addEventListener("input");
