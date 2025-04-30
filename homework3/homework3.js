// // РАБОТА С API
// //1 Используйте fetch для получения списка пользователей с  https://jsonplaceholder.typicode.com/users .
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Нет ответа сети");
//     }
//     return response.json(); // Преобразуем ответ в JSON
//   })
//   .then((users) => {
//     console.log(users); // Выводим список пользователей
//   })
//   .catch((error) => {
//     console.error("Ошибка обработки списка пользователей:", error);
//   });

// //2 Используйте axios для получения списка постов с  https://jsonplaceholder.typicode.com/posts .
// import axios from "axios";

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log(response.data); // Выводим список постов
//   })
//   .catch((error) => {
//     console.error("Ошибка обработки списка постов:", error);
//   });

// //ОБРАБОТКА ОШИБОК В АСИНХРОННОМ КОДЕ
// //1 Используйте fetch для получения данных с неверного URL и обработайте ошибку.
// fetch("https://jsonplaceholder.typicode.com/invalid-url")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Нет ответа сети");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Ошибка обработки результата запроса:", error);
//   });

// //2 Используйте axios для получения данных с неверного URL и обработайте ошибку.
// import axios from "axios";

// axios
//   .get("https://jsonplaceholder.typicode.com/invalid-url")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     if (error.response) {
//       console.error("Ошибка сервера:", error.response.status);
//     } else if (error.request) {
//       console.error("Ошибка сети:", error.request);
//     } else {
//       console.error("Ошибка:", error.message);
//     }
//   });

// //ИТЕРАТОРЫ, ГЕНЕРАТОРЫ, ПРОКСИ
// //1 Создайте итератор, который возвращает квадраты чисел от 1 до 10
// const squares = {
//     [Symbol.iterator]() {
//         let current = 1;
//         return {
//             next() {
//                 if (current <= 10) {
//                     return { value: current * current++, done: false };
//                 }
//                 return { done: true };
//             }
//         };
//     }
// };

// for (const square of squares) {
//     console.log(square); // 1, 4, 9, 16, ..., 100
// }

// //2 Напишите генератор, который возвращает случайные числа в заданном диапазоне
// function* randomNumbers(min, max) {
//     while (true) {
//         yield Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// }

// const randomGen = randomNumbers(1, 100);
// console.log(randomGen.next().value);
// console.log(randomGen.next().value);

// //3 Используйте прокси для создания объекта, который запрещает изменение определённых свойств.
// const user = {
//     name: "Иван",
//     age: 30
// };

// const handler = {
//     set(target, prop, value) {
//         if (prop === 'name') {
//             throw new Error("Имя нельзя изменить");
//         }
//         target[prop] = value; // Устанавливаем значение свойства
//         return true; // Указываем, что операция успешна
//     }
// };

// const proxy = new Proxy(user, handler);

// proxy.age = 21;
// console.log(proxy.age);

// try {
//     proxy.name = "Алиса";
// } catch (error) {
//     console.error(error.message);
// }
