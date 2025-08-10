let n = 1000;
let num = 0; 

while (n >= 50) {
  n /= 2;
  num++;
}

console.log("Конечное число:", n);
console.log("Количество итераций:", num);