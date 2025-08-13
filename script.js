const gameRegistry = {
  'guess-number': {
    html: `
      <h2 class="GameTitle">Угадай число от 1 до 100</h2>
      <div class="InputButton">
      <input class="GameInput" type="number" min="1" max="100">
      <button class="check">Проверить</button>
      </div>
      <p class="result"></p>
    `,
    setup: (container) => {
      let secretNumber = Math.floor(Math.random() * 100) + 1;
      const checkBtn = container.querySelector('.check');
      const resultElement = container.querySelector('.result');
      const answerInput = container.querySelector('.GameInput');
      
      checkBtn.addEventListener('click', () => {
        const guess = parseInt(container.querySelector('input').value);
        if (guess === secretNumber) {
          resultElement.textContent = `Поздравляем! Вы угадали число ${secretNumber}`;
          resultElement.style.color = "green";
          secretNumber = Math.floor(Math.random() * 100) + 1;
          answerInput.value = "";
          answerInput.focus();
        } else {
          resultElement.textContent = guess > secretNumber ? "Слишком много!" : "Слишком мало!";
          answerInput.select();

        }
      });
      answerInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          checkBtn.click();
        }
      });
      answerInput.focus();
    }
  },

  'simple-arithmetic': {
    html: `
      <h2 class="GameTitle">Реши пример</h2>
      <div class="task"></div>
      <div class="InputButton">
      <input class="GameInput" type="number">
      <button class="check">Проверить</button>
      </div>
      <p class="result"></p>`,
    
    setup: (container) => {
      function generateTask() {
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        
        let num1, num2;
        switch(operation) {
          case '+': 
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 50) + 1;
            break;
          case '-':
            num1 = Math.floor(Math.random() * 50) + 25;
            num2 = Math.floor(Math.random() * 25) + 1;
            if (num1 < num2) [num1, num2] = [num2, num1];
            break;
          case '*':
            num1 = Math.floor(Math.random() * 15) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            break;
          case '/':
            num2 = Math.floor(Math.random() * 10) + 1;
            const multiplier = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * multiplier;
            break;
        }
        
        let correctAnswer;
        switch(operation) {
          case '+': correctAnswer = num1 + num2; break;
          case '-': correctAnswer = num1 - num2; break;
          case '*': correctAnswer = num1 * num2; break;
          case '/': correctAnswer = num1 / num2; break;
        }
        
        return {
          question: `${num1} ${operation} ${num2} = ?`,
          answer: correctAnswer
        };
      }
      
      const taskElement = container.querySelector('.task');
      const answerInput = container.querySelector('.GameInput');
      const checkBtn = container.querySelector('.check');
      const resultElement = container.querySelector('.result');
      
      let currentTask = generateTask();
      taskElement.textContent = currentTask.question;
      
      checkBtn.addEventListener('click', () => {
        const userAnswer = parseFloat(answerInput.value);
    
        if (isNaN(userAnswer)) {
          resultElement.textContent = "Пожалуйста, введите число!";
          resultElement.style.color = "red";
          return;
        }
        
        if (Math.abs(userAnswer - currentTask.answer) < 0.001) {
          resultElement.textContent = "Правильно!";
          resultElement.style.color = "green";
          setTimeout(() => {
            currentTask = generateTask();
            taskElement.textContent = currentTask.question;
            answerInput.value = "";
            resultElement.textContent = "";
            answerInput.focus();
          }, 1000);
        } else {
          resultElement.textContent = `Неверно! Попробуйте еще раз.`;
          resultElement.style.color = "red";
          answerInput.select();
        }
      });

      answerInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          checkBtn.click();
        }
      });

      answerInput.focus();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('gameModal');
const gameContainer = document.getElementById('game-container');

modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

document.querySelectorAll('.game-card__button').forEach(btn => {
    btn.addEventListener('click', () => {
    const gameId = btn.dataset.game;

    if (gameRegistry[gameId]) {
        gameContainer.innerHTML = gameRegistry[gameId].html;
        gameRegistry[gameId].setup(gameContainer);
        modal.style.display = 'block';
    }
    });
});

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

});