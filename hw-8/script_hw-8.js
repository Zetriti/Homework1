//Задание 1
console.log('Задание 1');
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));

//Задание 2
console.log('Задание 2');
function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
         if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(filter([3, -4, 1, 9], isPositive));
const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
console.log(filter(people1, isMale));

//Задание 4
console.log('Задание 4');
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}
delayForSecond(function() {
   console.log('Привет, Глеб!');
})

//Задание 5
function crutch() {
   console.log('Задание 5');
}
setTimeout(crutch, 1000);
function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond2(() => sayHi('Глеб'));

//Задание 3
function crutch2() {
   console.log('Задание 3');
}
setTimeout(crutch2, 1000);
const intervalId = setInterval(() =>  console.log(new Date()), 3000);
setTimeout(() => { clearInterval(intervalId); console.log('30 секунд прошло'); }, 30000);

