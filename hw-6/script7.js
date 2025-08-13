const arr = [9, 8, 7, 6, 5];
const userInput = prompt(`Угадайте число в массиве`);
const namber = Number(userInput);
if (arr.includes(namber)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}