const arr = [5, 2, 6, 1, 7, 3, 4, 8, 9, 10];
for (let i = 0; i < arr.length - 1; i++) {
    const sum = arr[i] + arr[i + 1];
    console.log(`${arr[i]} + ${arr[i + 1]} = ${sum}`);
}