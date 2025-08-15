const numbers = [-5, 2, 6, -1, 7, -3, 4, -8, -9, 10];
function negativeNum(arr) {
  return arr.filter(num => num < 0);
} 
console.log(negativeNum(numbers));


