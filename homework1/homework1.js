//ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ С ПОМОЩЬЮ let, const, var
//1 Объявите переменную с помощью const и попробуйте изменить её значение. Что произойдёт?
const myConst = 10;
//myConst = 20; // Попытка изменить значение
//TypeError: Assignment to constant variable. - происходит потому, что переменные, объявленные с помощью const, не могут быть переназначены

//2 Объявите переменную с помощью let внутри блока к ней вне блока. Что произойдёт?
{
   let myLet = 5;
}
//console.log(myLet); // Попытка доступа к переменной вне блока
//ReferenceError: myLet is not defined - происходит потому, что переменные, объявленные с помощью let внутри блока, имеют блочную область видимости и недоступны вне этого блока

//3 Объявите переменную с помощью var внутри функции и попробуйте обратиться к ней вне функции. Что произойдёт?
function myFunction() {
   var myVar = 10; // Объявление переменной с помощью var
   console.log(myVar); // Доступно внутри функции
}

myFunction();
//console.log(myVar); // Попытка доступа к переменной вне функции
//ReferenceError: myVar is not defined - происходит потому, что переменные, объявленные с помощью var, имеют функциональную область видимости и недоступны вне своей функции

//4  Создайте объект с помощью const и измените его свойства. Что произойдёт?
const myObject = {
   name: "Alice",
   age: 25
};

myObject.age = 30; // Изменение свойства объекта
console.log(myObject); // { name: "Alice", age: 30 }
//{ name: 'Alice', age: 30 } - мы смогли изменить свойства объекта, даже если сам объект был объявлен с помощью const
//Это связано с тем, что const защищает только саму ссылку на объект, а не его содержимое. Таким образом, мы не можем переназначить объект, но можем изменять его свойства

//ТИПЫ ДАННЫХ. УСЛОВИЯ. ЦИКЛЫ. ФУНКЦИИ
//1 Создайте переменные разных типов данных (примитивы и объекты) и выведите их в  консоль.
// Примитивы
let number = 42; // Число
let string = "Hello, World!"; // Строка
let boolean = true; // Логический тип
let nullValue = null; // Null
let undefinedValue; // Undefined
let symbolValue = Symbol('symbol'); // Символ

// Объекты
let object = { name: "Alice", age: 25 }; // Объект
let array = [1, 2, 3, 4, 5]; // Массив

console.log("Number:", number);
console.log("String:", string);
console.log("Boolean:", boolean);
console.log("Null:", nullValue);
console.log("Undefined:", undefinedValue);
console.log("Symbol:", symbolValue);
console.log("Object:", object);
console.log("Array:", array);

//2 Напишите условие, которое проверяет, является ли число положительным, отрицательным или нулём.
function checkNumber(num) {
    if (num > 0) {
        console.log(num + " - положительное число");
    } else if (num < 0) {
        console.log(num + " - отрицательное число");
    } else {
        console.log(num + " - ноль");
    }
}

checkNumber(5);
checkNumber(-3);
checkNumber(0);

//3 Используйте цикл for , чтобы вывести числа от 1 до 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//4 Создайте функцию, которая принимает два числа и возвращает их сумму.
function sum(a, b) {
    return a + b;
}

let result = sum(5, 10);
console.log("Сумма:", result);

//МАССИВЫ И МЕТОДЫ РАБОТЫ С НИМИ
//1 Создайте массив чисел и используйте цикл for для вывода каждого элемента.
//Создание массива чисел
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Использование цикла for для вывода каждого элемента
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//2 Используйте метод forEach, чтобы вывести элементы массива и их индексы.
//let numbers = [100, 250, 320, 410, 575, 683, 711, 829, 937, 1010];

numbers.forEach(function(element, index) {
    console.log("Индекс:", index, "Элемент:", element);
});

//3  Создайте новый массив, где каждый элемент исходного массива умножен на 3, используя метод map
//let numbers = [100, 250, 320, 410, 575, 683, 711, 829, 937, 1010];
let multipliedByThree = numbers.map(function(element) {
    return element * 3;
});

// console.log("Исходный массив:", numbers);
// console.log("Массив, умноженный на 3:", multipliedByThree);

//4  Отфильтруйте массив, оставив только элементы больше 1000, используя метод filter
let filteredArray = multipliedByThree.filter(function(element) {
    return element > 1000;
});

// Вывод отфильтрованного массива
console.log("Отфильтрованный массив (элементы > 1000):", filteredArray);

//5 Найдите сумму всех элементов массива, используя метод reduce
let summ = filteredArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // Начальное значение аккумулятора равно 0

// Вывод суммы
console.log("Сумма всех элементов массива:", summ);

//ОБЪЕКТЫ В JAVASCRIPT. АСИНХРОННОСТЬ И ЕЕ ВАЖНОСТЬ. ПРОМИСЫ.
//1 Используйте setTimeout , чтобы вывести сообщение через 3 секунды.
setTimeout(function() {
    console.log("Сообщение выведено через 3 секунды");
}, 3000); // 3000 миллисекунд = 3 секунды

//2 Создайте интервал, который выводит сообщение каждую секунду, и остановите его через 5 секунд.
let intervalId = setInterval(function() {
    console.log("Сообщение выводится каждую секунду");
}, 1000);

// Остановка интервала через 5 секунд
setTimeout(function() {
    clearInterval(intervalId);
    console.log("Интервал остановлен через 5 секунд");
}, 5000);

//3 Напишите промис, который завершается успешно через 2 секунды, и обработайте его результат.
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Промис завершен успешно через 2 секунды");
    }, 2000);
});

// Обработка результата промиса
myPromise.then(function(result) {
    console.log(result);
});

//4 Используйте async/await , чтобы сделать запрос к API (например, https://jsonplaceholder.typicode.com/posts ) и вывести результат.
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log(data); // Выводим полученные данные
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
}

// Вызов функции для получения данных
fetchData();

//ДОМАШНЕЕ ЗАДАНИЕ
//1
// Создаем массив чисел
const numbers1 = [11, 12, 23, 24, 35, 36, 47, 48, 59, 60];

// Используем map для удвоения каждого числа
const doubled = numbers1.map(num => num * 2);
console.log('Удвоенные числа:', doubled);

// Используем filter для получения четных чисел
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log('Четные числа:', evenNumbers);

// Используем reduce для получения суммы всех чисел
const summa = numbers1.reduce((accumulator, current) => accumulator + current, 0);
console.log('Сумма всех чисел:', summa);

//2 Создать объект, представляющий книгу, и добавить методы для изменения и получения свойств.
// Создаем объект книги
const book = {
    title: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869,

    // Метод для получения информации о книге
    getInfo() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    },

    // Метод для изменения года издания
    setYear(newYear) {
        this.year = newYear;
    }
};

console.log(book.getInfo()); //информация о книге
book.setYear(1870); //изменяем год издания
console.log(book.getInfo()); //обновленная информация о книге

//3 Создать простую веб-страницу с кнопкой, которая изменяет текст при клике.
//index1.html

//4 Реализовать асинхронный запрос к API (например, используя fetch) и вывести его результат на страницу.
//index1.html
