const originalArr = Array.from({length: 10}, () => Math.floor(Math.random() * 11));
const evenNumbers = originalArr.filter(num => num % 2 === 0);
console.log("Исходный массив:", originalArr);
console.log("Массив чётных чисел:", evenNumbers);
