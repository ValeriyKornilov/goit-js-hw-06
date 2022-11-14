// отримуємо доступ до інпуту
const inputEl = document.querySelector("#validation-input");

// додаємо івент лісенери
inputEl.addEventListener("input", onInputChange);
inputEl.addEventListener("blur", onInputBlur);

// додаємо змінні для порівняння кількості введених символів
let numOfEnteredChars = 0;
let inputDataLength = inputEl.getAttribute("data-length");

function onInputChange(event) {
  numOfEnteredChars = event.currentTarget.value.length;
}

// функція для зміни класу інпута
function onInputBlur(event) {
  if (numOfEnteredChars === Number(inputDataLength)) {
    inputEl.classList.add("valid");
    inputEl.classList.replace("invalid", "valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.replace("valid", "invalid");
  }
}
