function greetUser() {

  const input = prompt("Сколько вам лет?");
  const age = Number(input);
  if (isNaN(age) || age < 0) {
    alert('Вы ввели неправильное значение');
  } else if (age <= 12) {
    alert('Привет, друг!');
  } else {
    alert('Добро пожаловать!');
  }
}
greetUser();