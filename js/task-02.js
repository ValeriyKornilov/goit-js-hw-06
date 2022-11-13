// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//отримуємо посилання на UL
const ingredientsUl = document.querySelector("#ingredients");

// перебираємо масив через map, створюючи на кожній ітерації нову 'li'
const ingredientsList = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

// розпилюємо масив li у батьківський ul
ingredientsUl.append(...ingredientsList);
