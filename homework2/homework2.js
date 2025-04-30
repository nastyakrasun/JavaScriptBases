//1  ИСпользуем созданный модуль geometry.js , который экспортирует функции для вычисления площади и периметра фигур.
import {
  rectangleArea,
  rectanglePerimeter,
  circleArea,
  circleCircumference,
  triangleArea,
  trianglePerimeter,
} from "./geometry.js";

// Вычисляем площадь и периметр прямоугольника
const length = 5;
const width = 3;

const rectArea = rectangleArea(length, width);
const rectPerimeter = rectanglePerimeter(length, width);

console.log(`Площадь прямоугольника: ${rectArea}`);
console.log(`Периметр прямоугольника: ${rectPerimeter}`);

// Вычисляем площадь и окружность круга
const radius = 4;

const circArea = circleArea(radius);
const circCircumference = circleCircumference(radius);

console.log(`Площадь круга: ${circArea}`);
console.log(`Окружность круга: ${circCircumference}`);

//1 (Модули в JavaScript) Вычисляем площадь и периметр треугольника
const base = 4;
const height = 4;

const a = 4;
const b = 6;
const c = 8;

const trArea = triangleArea(base, height);
const trPerimeter = trianglePerimeter(a, b, c);

console.log(`Площадь треугольника: ${trArea}`);
console.log(`Периметр треугольника: ${trPerimeter}`);

//2 Используйте замыкания для создания кэширующей функции, которая запоминает результаты вычислений.
function cacheFunction(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            console.log('Из кэша:', cache[key]);
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;

        console.log('Вычислено:', result);
        return result;
    };
}

// Пример использования кэширующей функции:
const cachedAdd = cacheFunction((a, b) => a + b);

cachedAdd(1, 2);
cachedAdd(1, 2);

//3 Создайте класс BankAccount с методами для внесения и снятия денег, а затем класс SavingsAccount , который добавляет процентный доход.
class BankAccount {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Внесено ${amount}. Текущий баланс: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостаточно средств");
      return;
    }

    this.balance -= amount;
    console.log(`Снято ${amount}. Текущий баланс: ${this.balance}`);
  }
}

class SavingsAccount extends BankAccount {
  constructor(owner, interestRate) {
    super(owner);
    this.interestRate = interestRate;
  }

  applyInterest() {
    const interest = this.balance * (this.interestRate / 100);
    this.deposit(interest);
    console.log(`Процент добавлен. Текущий баланс: ${this.balance}`);
  }
}

// Пример использования:
const savingsAccount = new SavingsAccount("Alice", 5);
savingsAccount.deposit(1000);
savingsAccount.applyInterest();
savingsAccount.withdraw(200);

//ДОМАШНЕЕ ЗАДАНИЕ
//2 (Замыкания) Используйте замыкания для создания функции-генератора уникальных идентификаторов (ID).
//Каждый вызов функции должен возвращать новый уникальный ID (начиная с 1). Добавьте возможность сброса счётчика ID.
// idGenerator.js - генерирует уникальные идентификаторы
import idGenerator from "./idGenerator.js";

// Генерация уникальных идентификаторов
console.log("Генерация уникальных идентификаторов:");
console.log(idGenerator.generateId()); // 1
console.log(idGenerator.generateId()); // 2
console.log(idGenerator.generateId()); // 3

// Сброс счётчика ID
console.log("Сброс счётчика ID: начальное значение 5");
idGenerator.reset();

// Генерация идентификаторов после сброса
console.log(idGenerator.generateId()); // 6
console.log(idGenerator.generateId()); // 7
console.log(idGenerator.generateId()); // 8

//4 (Модули и замыкания) Создайте модуль cache.js , который экспортирует функцию для кэширования результатов любой другой функции.
//Функция должна принимать другую функцию в качестве аргумента и возвращать новую функцию, которая кэширует результаты.
//Используйте замыкания для хранения кэша
// cache.js - кэширует результаты функции
import cache from './cache.js';

//функция, которую мы будем кэшировать
function slowFunction(num) {
    console.log('Выполняем медленную функцию...');
    // Имитация медленной работы
    for (let i = 0; i < 1e8; i++) {}
    return num * 2;
}

// Кэшируем результаты функции
const cachedSlowFunction = cache(slowFunction);

// Используем кэшированную функцию
console.log(cachedSlowFunction(5));
console.log(cachedSlowFunction(5));
console.log(cachedSlowFunction(10));
console.log(cachedSlowFunction(10));

//3 (Классы и ООП) Создайте класс Animal с методом sound, который выводит звук животного.
//Создайте классы Dog, Cat и Bird , которые наследуют Animal и переопределяют метод sound/
//Добавьте в класс Animal свойство name и метод introduce , который выводит: "My name is [name], and I say [sound]".
// animals.js - класс Animal с наследниками Dog, Cat, Bird
import { Dog, Cat, Bird } from './animals.js';

// Создаем экземпляры животных
const dog = new Dog("Дружок");
const cat = new Cat("Мурка");
const bird = new Bird("Веня");

// Вызываем метод introduce для каждого животного
dog.introduce();
cat.introduce();
bird.introduce();

//5 (Классы и ООП) Создайте класс BankAccount с методами для внесения и снятия денег.
// Добавьте свойство transactionHistory , которое хранит историю всех операций (внесение, снятие).
// Создайте класс SavingsAccount , который наследует метод для начисления процентов.
// bankAccount.js - класс BankAccount с методами для внесения и снятия денег
// import { BankAccount, SavingsAccount } from './bankAccount.js';

// // Создаем экземпляр обычного банковского счета
// const account = new BankAccount("Светлана Скворцова");
// account.deposit(3000);
// account.withdraw(2000);
// console.log(`Баланс счета: ${account.getBalance()}`);
// console.log("История транзакций:", account.getTransactionHistory());

// // Создаем экземпляр сберегательного счета
// const savingsAccount = new SavingsAccount("Алексей Измаилов", 2);
// savingsAccount.deposit(5000);
// savingsAccount.applyInterest(); // Начисление процентов
// console.log(`Баланс сберегательного счета: ${savingsAccount.getBalance()}`);
// console.log("История транзакций:", savingsAccount.getTransactionHistory());
