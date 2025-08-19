//Задание 1
console.log("Задание 1");
const str = "js";
console.log(str.toUpperCase());

//Задание 2
console.log("Задание 2");
const arr = ['Ярославль', 'Нижний Тагил', 'Тверь', 'Ростов', 'Нижний Новгород', 'Рыбинск'];
const word = 'нижний';
function filter(newArr, word) {
    const lower = word.toLowerCase();
    
    return newArr.filter(item => 
        item.toLowerCase().startsWith(lower)
    );
}
const result = filter(arr, word);
console.log(result);
console.log(str.toUpperCase());

//Задание 3
console.log("Задание 3");
const number = 32.58884;
const floorResult = Math.floor(number);
console.log("Округление до меньшего целого = " + floorResult);
const ceilResult = Math.ceil(number);
console.log("Округление до большего целого = " + ceilResult);
const roundResult = Math.round(number);
console.log("Округление до ближайшего целого = " + roundResult);

//Задание 4
console.log("Задание 4");
const numbers = [52, 53, 49, 77, 21, 32];
const minNumber = Math.min(...numbers);
console.log("Минимальное значение:" + minNumber); 
const maxNumber = Math.max(...numbers);
console.log("Максимальное значение:" + maxNumber);

//Задание 5
console.log("Задание 5");
function randomNumber() {
    const number = Math.floor(Math.random() * 10) + 1;
    console.log(number);
}
randomNumber(); 

//Задание 6
console.log("Задание 6");
function randomArr(number) {
    const length = Math.floor(number / 2);
    return Array.from({ length }, () => Math.floor(Math.random() * (number + 1)));
}
const newRandomArr = randomArr(10);
console.log(newRandomArr); 

//Задание 7
console.log("Задание 7");
function randomNumeral(firstNumber, secondNumber) {

    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
}
const returnNumeral = randomNumeral(3,7);
console.log(returnNumeral); 

//Задание 8
console.log("Задание 8");
console.log(new Date());

//Задание 9
console.log("Задание 9");
const currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = currentDate - days73;
let daysAgo73 = new Date(searchDate); 
console.log(daysAgo73); 

//Задание 10
console.log("Задание 10");
const myDate = new Date();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
"Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let fullDate = "Дата: " + myDate.getDate() + 
// getDate возвращает число

" " + months[myDate.getMonth()] + 
// getMonth возвращает номер месяца, 
// который мы можем использовать в качестве индекса для массива months

" " + myDate.getFullYear() + 
// getFullYear возвращает год

" — это " + days[myDate.getDay()]; 
// getDay возвращает номер дня недели, 
// который мы используем в качестве индекса для массива days

console.log(fullDate); 

let fullTime = "Время: " + myDate.getHours() + ":" +  myDate.getMinutes() + ":" +  myDate.getSeconds();

console.log(fullTime); 








