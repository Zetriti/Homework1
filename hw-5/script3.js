let number = prompt('Введите число')
//Вывод в консоль
function printSquare(number) {
  const square = number * number;
  console.log(`Площадь числа ${number} = ` + square);
}
printSquare(number)
//Вывод значением
function getSquare(number) {
  return number * number;
}
const result = getSquare(number);
console.log(`Площадь числа ${number} = ` + result);
