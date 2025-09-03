let a = prompt('Введите первое число')
let b = prompt('Введите второе число')
function multiplicationOfNumbers(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) {
    return 'Одно или оба значения не являются числом';
  }
  return 'Произведение чисел = '+ numA * numB;
}
const result = multiplicationOfNumbers(a, b);
console.log(result);
alert(result)
