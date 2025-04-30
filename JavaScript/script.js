// let, const, var
//l-l-let me die
/*let x = 10;
if(true) {
    let x = 20; //другая переменная
    console.log(x);
}

console.log(x);

{
    let y =5;
    console.log(y);
}*/

// let z  =1;
// z=2;
// console.log(z);

// let a =10;
// let a =20:


//const

// const pi = 3.14;
// console.log(pi);
// pi = 3.1455135;
// {
//     const name  = "Alica";
//     console.log(name);
// }

// console.log(name);

// const person = {name: "John"};
// person.name = "Alica"; // свойство объекта можно переопределить 
// console.log(person);

// person = {name : "Bob"};

//var

// var x = 10;
// if (true) {
//     var x =20;
//     console.log(x);
// }

// console.log(x);

//Типы данных 
//Примитивы и объекты 

//Примитивы : number, string, boolean

//Примеры передачи по значению (примитивы)
// let a =5;
// let b = a;
// b =10;
// console.log(a); //будет 5 по значениям 

//Примеры передачи по ссылке (объекты)

// let obj1 = {name: "Alisa"};
// let obj2 = obj1;// копирование 
// obj2.name = "Bobik";
// console.log(obj1.name); //значение изменилось (ДА НУ НА..)

// Функции 

// function test(name){
//     return "Hello" + name + "!"
// }

// let message = test("Dasha");
// console.log(message);

//Стрелочная функция 
// const add = (a,b) => a + b;
// console.log(add(2,3));

//Массивы и методы работы с ними

 // Основные методы 
 //push - добавление элементов в конец
 //pop - удаление элемента с конца 
 //shift - удаление элемента с начала 
 //unshift - добавление элемента в начало
 //slice - создание нового массива из части исходного
 //splice - удаление, замена, добавление элементов
 //concat - объединение массива 
 //indexOf - поиск индекса элемента
 //includes - проверка наличия элемента
 

 // Метод map - метод массива, который созздает новый массив, применняя функцию исходного
//  let arr = [1,2,3,4,5,6,7];
//  let newArr= arr.map(item => item*2);
//  // [2,4,6]

//  //filter

//  let filterdArr = arr.filter(item => item > 2);
//  //[3,4,5,6,7]
//  //reduce - для суммирования, накопления масссива 
//  let sum = arr.reduce((acc,item) => acc +item,0);
//  // результат  - сумма всех элементов

// async function fetchPosts() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
//         let posts = await response.json();
//         console.log(posts);
//     } catch (error) {
//         console.error("Error fetching posts:", error);
//     }
// }

// fetchPosts();

//27.02.25
// модули, замыкания, классы, ооп
//1 модули
// для разбиения кода по смысловым частям - понятнее
// осн концепции: export переменные, ф-ии, классы доступны в др модулях
export default function add(a, b){
    return a + b;
}
//чтобы переиспользовать эту ф-ию в др скрипте, напр myfirstjs.js там пишем import add from './script.js';
//замыкания и области видимости
//замыкание- это фия, запоминающая свое лексич окружение
//лексич окружение - структура, кот хранит инфу о наших переменных
//пример
function createCounter() {
    let count = 0; //локальная переменная счетчик
    // данная ф-ия возвр др ф-ию, которая при кажд срабатывании увеличивает наш счетчик на 1
    return function() {
        count++;
        return count;
    }
}
//присваиваем переменной результат ф-ии и выволим в логе нашу переменную
const counter = createCounter();

console.log(counter()); //при кажд срабтывании итерация происходит с прошлого значения count
console.log(counter());

//ооп классы
//создаем класс
class Person {
    constructor(name, age) { //с пом конструктора задаем имя и возраст
        this.name = name;
        this.age = age; //локально определили переменные и свойства
    }
    // создаем метод для использования приветствия
    takeGreet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// создаем объект и передаем 2 параметра
const person = new Person("Alice", 30);
//вызываем метод
person.takeGreet();

//fetch - встроенный метод, возвр ответ сервера
//axios - попул библиотека для http-запросов

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Преобразуем ответ в JSON
    })
    .then(data => {
        console.log(data); // Выводим данные
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Устанавливаем axios (если не установлен)
// npm install axios

import axios from 'axios';

// Выполняем GET-запрос к API
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data); // Выводим данные
    })
    .catch(error => {
        console.error('There was a problem with the axios request:', error);
    });

//итераторы, генераторы и прокси, примеры их применения
// итераторы - перебор элементов массива for each, map, filter, при работе с коллекциями set, map, постраничное отображение результата
// итераторы раб внутри встроенных методов, напр метод next()

//генераторы
// генератор позв созд фии, кот приост свое выполнение возвр неск значений - асинхронные операции, асинхр запросы async fetch-запрос
// исп для генерации последовательностей и автоматич полученя уникального идентификатра - function*

//прокси
//вряд ли исп-ся, но для теории нужно
//прокси исп-ся для гибких систем, валидации даных, логирования и кеширования
