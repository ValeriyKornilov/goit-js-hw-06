// отримуємо доступ до форми
const formEl = document.querySelector(".login-form");

// додаємо івент-лісенер
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  // забороняємо дефолтну поведінку
  event.preventDefault();

  // змінні для доступу до введених даних
  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  // якщо поле пусте - виводимо алерт
  if (email === "" || password === "") {
    return alert("Будь ласка, заповніть всі поля");
  }
  // передаємо дані у об'єкт
  const formData = {
    email,
    password,
  };

  console.log(formData);
  // перезавантажуємо інпут
  event.currentTarget.reset();
}
