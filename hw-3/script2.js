console.log('Задание 2')
const massiv = [0, 10, -3, 2];
massiv.forEach(c => {
  if (c > 0 && c < 10) {
    console.log(`Для c = ${c}: Верно`);
  } else {
    console.log(`Для c = ${c}: Неверно`);
  }
});