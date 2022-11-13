// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.

// Для кожного элемента li.item у спику ul#categories, знайде і виведе
// в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів
// в категорії(усіх < li >, вкладених в нього).

// отримуємо посилання до масиву із li item
const categories = document.querySelectorAll(".item");
// виводимо кількість li в консоль
console.log("Number of categories:", categories.length);

// перебираємо масив категорій через for of, виводячи в консоль назву категорії та кількість дітей в ній
for (const category of categories) {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.lastElementChild.children.length);
}
