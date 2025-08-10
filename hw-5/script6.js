function calculateCube() {
const input = prompt('Введите число');
const n = Number(input);

  if (isNaN(n)) {
    return 'Переданный параметр не является числом';
  }
  return `${n} в кубе равняется ` + n * n * n;
}
for (let i = 0; i <= 10; i++) {
  console.log(calculateCube());
}
