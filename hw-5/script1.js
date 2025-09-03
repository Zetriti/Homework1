let a = prompt('Введите первое число')
let b = prompt('Введите второе число')
function minNumber(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log('Меньшее число = ' + minNumber(a, b));