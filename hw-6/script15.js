const arr = Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1);
let sumArr = arr.reduce((sum, current) => sum + current, 0);
const result = sumArr / arr.length;
console.log(arr);
console.log(sumArr);
console.log(result);
