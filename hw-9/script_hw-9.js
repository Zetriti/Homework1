//Задание 1
document.addEventListener('DOMContentLoaded', function() {
    const headingTask1 = document.querySelector('.title-Task1');
    const buttonTask1 = document.querySelector('.button-Task1');
    buttonTask1.addEventListener('click', () => {
        headingTask1.classList.toggle('hidden');
        if (headingTask1.classList.contains('hidden')) {
            buttonTask1.textContent = 'Показать текст';
        } else {
            buttonTask1.textContent = 'Скрыть текст';
        }
    });
});

//Задание 2
document.addEventListener('DOMContentLoaded', function() {
    const textTask2 = document.querySelector('.text-Task2');
    const buttonTask2 = document.querySelector('.button-Task2');
    buttonTask2.addEventListener('click', () => {
        textTask2.style.color = "blue";
    });
});

//Задание 3
document.addEventListener('DOMContentLoaded', function() {
    const titleTask3 = document.querySelector('.title-Task3');
    const buttonTask3 = document.querySelector('.button-Task3');
    buttonTask3.addEventListener('click', () => {
        titleTask3.innerHTML = "Привет, мир!";
    });
});

//Задание 4
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.conteinerTask4');
    const allDescriptionsTask4 = container.querySelectorAll('.description');
    const buttonTask4 = container.querySelector('.button-Task4');
    buttonTask4.addEventListener('click', () => {
        allDescriptionsTask4.forEach(description => {
        description.textContent = 'Измененный текст';
        });
    });
});

//Задание 5
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.conteinerTask5');
    const allDescriptionsTask5 = container.querySelectorAll('.description');
    const buttonTask5 = container.querySelector('.button-Task5');
    buttonTask5.addEventListener('click', () => {
        allDescriptionsTask5.forEach(description => {
        description.textContent = 'Новый текст';
        });
    });
});

//Задание 6
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.conteinerTask6');
    const buttonTask6 = document.querySelector('.button-Task6');
    buttonTask6.addEventListener('click', () => {
        const newP = document.createElement('p');
        newP.textContent = 'Новый абзац';
        container.appendChild(newP);
    });
});

//Задание 7
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.conteinerTask7');
    const descriptionsTask5 = container.querySelector('.description');
    const buttonTask7 = container.querySelector('.button-Task7');
    buttonTask7.addEventListener('click', () => {
        descriptionsTask5.remove()
        });
});
