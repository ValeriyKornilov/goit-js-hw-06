// отримуємо доступ до кнопок і лічильника

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

// додаємо 2 методи в об'єкт counter:
const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

// додаємо сліхачі подій на обидві кнопки, в яких ініціалізуємо зміну хначення лічильника
decrementButton.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});

incrementButton.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.value;
});
