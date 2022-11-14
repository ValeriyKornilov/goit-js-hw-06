// отримуємо доступ до інпуту та тексту
const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// додаємо івент лісенер
rangeEl.addEventListener("input", onRangeElSlide);

// функція зміни інлайн стилю на спані
function onRangeElSlide(event) {
  // змінна приймає числове значення слайдера
  let size = event.currentTarget.value;
  // передаємо це значення в інлайн-стиль тексту
  textEl.style.fontSize = size + "px";
}
