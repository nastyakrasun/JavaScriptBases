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

//async function fetchPosts() {
// try {
//    let response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
//    let posts = await response.json();
//   console.log(posts);
//  } catch (error) {
//    console.error("Error fetching posts:", error);
//}
//}

//fetchPosts();

const myConst = 10;
myConst = 20; // Попытка изменить значение
