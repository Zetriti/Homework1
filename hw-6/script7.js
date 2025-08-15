const arr = [9, 8, 7, 6, 5];
const userInput = prompt(`Угадайте число в массиве`);
const number = Number(userInput);
if (arr.includes(number)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}