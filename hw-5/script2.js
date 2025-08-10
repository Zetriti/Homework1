let number = prompt('Введите число')
function CheckingForParity(number) {
  if (number % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}
console.log(CheckingForParity(number))