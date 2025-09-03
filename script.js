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
  },

  'reverse-text': {
    html: `
    <div class="text-reverse-game">
      <h2 class="GameTitle">Переверни текст</h2>
      <p style= "color: rgb(32, 32, 39);
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0px;" 
      >
      Введите любой текст, и мы перевернём его!</p>
      <div style="margin: 20px 0;">
      <textarea 
          id="reverse-text-input" 
          placeholder="Введите текст здесь..." 
          style="width: 100%; 
          border-radius: 60px;
          padding: 12px; 
          font-size: 18px;"
      ></textarea>
      </div>
      <button id="reverse-text-btn" style= "border-radius: 60px;
              background: rgb(32, 32, 39);
              color: rgb(255, 255, 255);
              font-family: Montserrat;
              font-size: 24px;
              font-weight: 600;
              line-height: 141.69%;
              letter-spacing: 0%;
              text-align: center;
              width: 247px;
              height: 66px;
              margin-top: 20px;"
              >Перевернуть текст</button>
      <div id="result-container" style= "margin-top: 30px; padding: 20px; background: #f0f0f0; border-radius: 8px;">
          <h3>Результат:</h3>
          <div id="reversed-text" style= "font-size: 20px; word-break: break-all;"></div>
      </div>
    </div>
    `,

  setup: (container) => {
      const inputText = container.querySelector('#reverse-text-input');
      const reverseBtn = container.querySelector('#reverse-text-btn');
      const resultContainer = container.querySelector('#result-container');
      const reversedText = container.querySelector('#reversed-text');

      resultContainer.style.display = 'none';
      
      function reverseString(str) {
        return str.split('').reverse().join('');
      }
    
      reverseBtn.addEventListener('click', () => {
        const text = inputText.value.trim();
        
        if (!text) {
          alert('Пожалуйста, введите текст!');
          inputText.focus();
          return;
        }
    
        const reversed = reverseString(text);
        
        reversedText.textContent = reversed;
        resultContainer.style.display = 'block';
      });
      
      inputText.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          checkBtn.click();
        }
      });
    
      inputText.focus();
    }
  },

  'quiz': {
        html: `
      <div class="quiz-game">
        <h2 class="GameTitle">Викторина</h2>
        <p style="color: rgb(32, 32, 39);
          font-family: Montserrat;
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: 0px;
          margin-bottom: 30px;">
          Проверьте свои знания! Ответьте на все вопросы.
        </p>
        <div id="quiz-container">
          <button id="start-quiz-btn"
            style="border-radius: 60px;
              background: rgb(32, 32, 39);
              color: rgb(255, 255, 255);
              font-family: Montserrat;
              font-size: 24px;
              font-weight: 600;
              line-height: 141.69%;
              letter-spacing: 0%;
              text-align: center;
              width: 247px;
              height: 66px;
              margin-top: 20px;
              cursor: pointer;">
            Начать викторину
          </button>
        </div>
        <div id="quiz-result" 
          style="display: none; 
          padding: 20px; 
          border-radius: 8px;
          margin-top: 30px;
          background: #f0f0f0;"
        >
          <h3 class="GameTitle">Результат:</h3>
          <p id="score-message" style="font-size: 20px; font-weight: bold;"></p>
          <button id="restart-quiz"
            style="border-radius: 60px;
              background: rgb(32, 32, 39);
              color: rgb(255, 255, 255);
              font-family: Montserrat;
              font-size: 24px;
              font-weight: 600;
              line-height: 141.69%;
              letter-spacing: 0%;
              text-align: center;
              width: 247px;
              height: 66px;
              margin-top: 20px;"
          >
            Пройти еще раз
          </button>
        </div>
      </div>
    `,

    setup: function(container) { 
      const quiz = [
        {
          question: "Какой цвет небо?",
          options: ["1. Красный", "2. Синий", "3. Зеленый"],
          correctAnswer: 1 
        },
        {
          question: "Сколько дней в неделе?",
          options: ["1. Шесть", "2. Семь", "3. Восемь"],
          correctAnswer: 1
        },
        {
          question: "Сколько у человека пальцев на одной руке?",
          options: ["1. Четыре", "2. Пять", "3. Шесть"],
          correctAnswer: 1
        }
      ];

      const quizContainer = container.querySelector('#quiz-container');
      const quizResult = container.querySelector('#quiz-result');
      const scoreMessage = container.querySelector('#score-message');
      const restartButton = container.querySelector('#restart-quiz');
      const startButton = container.querySelector('#start-quiz-btn');

      let score = 0;

      function startQuiz() {
        score = 0;
        
        for (let i = 0; i < quiz.length; i++) {
          const question = quiz[i];
          
          let questionText = question.question + "\n\n";
          question.options.forEach(option => {
            questionText += option + "\n";
          });
          questionText += "\nВведите номер правильного ответа:";
          
          const userAnswer = prompt(questionText);
          
          if (userAnswer && parseInt(userAnswer) === question.correctAnswer + 1) {
            score++;
          }
        }
        
        showResult();
      }

      function showResult() {
        scoreMessage.textContent = `Вы ответили правильно на ${score} из ${quiz.length} вопросов!`;
        
        if (score === quiz.length) {
          scoreMessage.innerHTML += '<br> Отличный результат!';
          scoreMessage.style.color = 'green';
        } else if (score >= quiz.length / 2) {
          scoreMessage.innerHTML += '<br> Хороший результат!';
          scoreMessage.style.color = 'orange';
        } else {
          scoreMessage.innerHTML += '<br> Попробуйте еще раз!';
          scoreMessage.style.color = 'red';
        }
        
        quizResult.style.display = 'block';
      }

      startButton.addEventListener('click', startQuiz);
      
      restartButton.addEventListener('click', () => {
        quizResult.style.display = 'none';
        startQuiz();
      });
    }
  },

  'rock-paper-scissors': {
  html: `
    <div class="rps-game">
      <div>
        <h2 class="GameTitle">Камень, ножницы, бумага</h2>
        <p style="color: rgb(32, 32, 39);
          font-family: Montserrat;
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: 0px;
          margin-bottom: 10px;">
          Сыграйте против компьютера!
        </p>
        <button id="start-rps-btn"
          style="border-radius: 60px;
            background: rgb(32, 32, 39);
            color: rgb(255, 255, 255);
            font-family: Montserrat;
            font-size: 24px;
            font-weight: 600;
            line-height: 141.69%;
            letter-spacing: 0%;
            text-align: center;
            width: 247px;
            height: 66px;
            margin-top: 10px;
            cursor: pointer;">
          Сделать выбор
        </button>
      </div>
      <div id="rps-result" 
        style="display: none; 
        padding: 20px; 
        border-radius: 8px;
        margin-top: 30px;
        background: #f0f0f0;"
      >
        <h3 class="GameTitle">Результат раунда:</h3>
        <div id="rps-choices" style="font-size: 20px; margin: 15px 0;"></div>
        <div id="rps-winner" style="font-size: 24px; font-weight: bold;"></div>
        <button id="play-again-btn"
          style="border-radius: 60px;
            background: rgb(32, 32, 39);
            color: rgb(255, 255, 255);
            font-family: Montserrat;
            font-size: 24px;
            font-weight: 600;
            line-height: 141.69%;
            letter-spacing: 0%;
            text-align: center;
            width: 247px;
            height: 66px;
            margin-top: 10px;"
        >
          Играть снова
        </button>
      </div>
    </div>
  `,
  setup: function(container) {
    const rpsResult = container.querySelector('#rps-result');
    const rpsChoices = container.querySelector('#rps-choices');
    const rpsWinner = container.querySelector('#rps-winner');
    const startButton = container.querySelector('#start-rps-btn');
    const playAgainButton = container.querySelector('#play-again-btn');

    const choices = ["камень", "ножницы", "бумага"];
    
    function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
    }
    
    function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return "Ничья!";
      }
      
      if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
      ) {
        return "Вы победили!";
      }
      
      return "Компьютер победил!";
    }
    
    function playGame() {
      const userChoice = prompt("Выберите: камень, ножницы или бумага?");
      
      if (!userChoice || !choices.includes(userChoice.toLowerCase())) {
        alert("Пожалуйста, выберите один из вариантов: камень, ножницы или бумага");
        return;
      }
      
      const computerChoice = getComputerChoice();
      
      const result = determineWinner(userChoice.toLowerCase(), computerChoice);
      
      rpsChoices.innerHTML = `
        <p>Ваш выбор: <strong>${userChoice}</strong></p>
        <p>Выбор компьютера: <strong>${computerChoice}</strong></p>
      `;
      
      rpsWinner.textContent = result;
    
      rpsResult.style.display = 'block';
    }
    
    startButton.addEventListener('click', playGame);
    
    playAgainButton.addEventListener('click', () => {
      rpsResult.style.display = 'none';
      playGame();
    });
  }
},

'color-generator': {
  html: `
    <div class="color-game" style="max-width: 100%; overflow: hidden; text-align: center;">
      <h2 class="GameTitle" style="font-size: calc(1.5rem + 1vw);">Генератор случайных цветов</h2>
      <p style="color: rgb(32, 32, 39);
        font-family: Montserrat;
        font-size: calc(1rem + 0.5vw);
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0px;
        margin-bottom: 20px;">
        Нажмите на кнопку, чтобы изменить цвет фона страницы
      </p>
      <button id="generate-color-btn"
        style="border-radius: 60px;
          background: rgb(32, 32, 39);
          color: rgb(255, 255, 255);
          font-family: Montserrat;
          font-size: calc(1rem + 0.5vw);
          font-weight: 600;
          line-height: 141.69%;
          letter-spacing: 0%;
          text-align: center;
          width: 80%;
          max-width: 247px;
          height: 66px;
          margin-top: 20px;
          cursor: pointer;">
        Сменить цвет
      </button>
      <button id="original-color-btn"
        style="border-radius: 60px;
          background: rgb(32, 32, 39);
          color: rgb(255, 255, 255);
          font-family: Montserrat;
          font-size: calc(1rem + 0.5vw);
          font-weight: 600;
          line-height: 141.69%;
          letter-spacing: 0%;
          text-align: center;
          width: 80%;
          max-width: 247px;
          height: 66px;
          margin-top: 20px;
          cursor: pointer;">
        Стандартный цвет
      </button>
      <div id="color-info" 
        style="margin-top: 30px; 
        padding: 20px; 
        border-radius: 8px;
        background: #f0f0f0;
        display: none;"
      >
        <h3 style="font-size: calc(1.2rem + 0.5vw); margin-bottom: 15px;">Текущий цвет фона:</h3>
        <div id="current-color" style="font-size: calc(1rem + 0.3vw); font-weight: bold;"></div>
        <div id="color-box" style="width: 100px; height: 100px; margin: 15px auto; border: 2px solid #333; border-radius: 8px;"></div>
      </div>
    </div>
  `,
  setup: function(container) {
    const generateBtn = container.querySelector('#generate-color-btn');
    const originalBtn = container.querySelector('#original-color-btn');
    const colorInfo = container.querySelector('#color-info');
    const currentColor = container.querySelector('#current-color');
    const colorBox = container.querySelector('#color-box');
    const miniGameSection = document.querySelector('section.mini-game');
    const aboutGameSection = document.querySelector('section.about');
    const originalColor = 'rgb(32, 32, 39)';
    
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    originalBtn.addEventListener('click', () => {
      miniGameSection.style.backgroundColor = originalColor;
      aboutGameSection.style.backgroundColor = originalColor;
      
      currentColor.textContent = originalColor;
      colorBox.style.backgroundColor = originalColor;
      colorInfo.style.display = 'block';
    });

    generateBtn.addEventListener('click', () => {
      const randomColor = getRandomColor();
    
      miniGameSection.style.backgroundColor = randomColor;
      aboutGameSection.style.backgroundColor = randomColor;
      
      currentColor.textContent = randomColor;
      colorBox.style.backgroundColor = randomColor;
      colorInfo.style.display = 'block';
    });
  }
}

};

document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('gameModal');
const gameContainer = document.getElementById('game-container');

  if (!modal || !gameContainer) {
    console.error('Не удалось найти модальное окно или контейнер игры');
    return;
  }
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

//Линия с анимацией прокрутки
document.addEventListener('DOMContentLoaded', function() {
    const scroller = document.querySelector('.line__content');
    const items = scroller.innerHTML;
    scroller.innerHTML += items;
    
    scroller.addEventListener('mouseenter', function() {
        scroller.classList.add('paused');
    });
    
    scroller.addEventListener('mouseleave', function() {
        scroller.classList.remove('paused');
    });
});