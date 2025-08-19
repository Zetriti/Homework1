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
      Перед вами текст. Введите его перевернутую версию:</p>
      
      <div id="original-text" 
           style="font-size: 24px; 
                  margin: 20px 0; 
                  padding: 15px; 
                  background-color: transparent;
                  border-radius: 8px;
                  font-weight: bold;">
      </div>
      
      <div style="margin: 20px 0;">
        <input 
          type="text" 
          id="inputText" 
          placeholder="Введите перевернутый текст здесь..." 
          style="width: 100%; 
          border-radius: 60px;
          padding: 12px; 
          font-size: 18px;"
        >
      </div>
      
      <button class="check">Проверить</button>
      
      <div class="result" 
           style="margin-top: 20px; 
                  padding: 15px; 
                  border-radius: 8px; 
                  font-size: 20px; 
                  text-align: center;">
      </div>
    </div>
  `,

  setup: (container) => {
    function generateRandomText() {
      const texts = [
        "Hello World!",
        "Привет, мир!",
        "12345",
        "SkyPro",
        "Переверни меня",
        "А роза упала на лапу Азора",
        "Лена Головач",
        "У дуба буду",
        "Кулинар, храни лук",
        "Умер, и мир ему"
      ];
      return texts[Math.floor(Math.random() * texts.length)];
    }
    
    function reverseString(str) {
      return str.split('').reverse().join('');
    }
    
    const originalText = container.querySelector('#original-text');
    const userInput = container.querySelector('#inputText');
    const checkBtn = container.querySelector('.check');
    const resultDiv = container.querySelector('.result');
    
    const original = generateRandomText();
    originalText.textContent = original;
    
    checkBtn.addEventListener('click', () => {
      const userAnswer = userInput.value;
      const correctAnswer = reverseString(originalText.textContent);
      
      if (userAnswer === correctAnswer) {
        resultDiv.textContent = "Вы правильно перевернули текст!";
        resultDiv.style.backgroundColor = "#d4edda";
        resultDiv.style.color = "#155724";
        
        setTimeout(() => {
          const newText = generateRandomText();
          originalText.textContent = newText;
          userInput.value = "";
          resultDiv.textContent = "";
          resultDiv.style.backgroundColor = "";
          userInput.focus();
        }, 1500);
      } else {
        resultDiv.textContent = `Неверно! Правильный ответ: "${correctAnswer}"`;
        resultDiv.style.backgroundColor = "#f8d7da";
        resultDiv.style.color = "#721c24";
        userInput.select();
      }
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
        <div id="quiz-container"></div>
        <div id="quiz-result" 
          style="display: none; 
          padding: 20px; 
          border-radius: 8px;"
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
            Пройти еще раз</button>
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

      let currentQuestion = 0;
      let score = 0;
      let userAnswers = [];

      // Функция для отображения вопроса
      function showQuestion(questionIndex) {
        const questionObj = quiz[questionIndex];
        quizContainer.innerHTML = `
          <div class="question">
            <h3>Вопрос ${questionIndex + 1} из ${quiz.length}:</h3>
            <p style="font-size: 20px; margin: 15px 0;">${questionObj.question}</p>
            <div class="options">
              ${questionObj.options.map((option, index) => `
                <label style="display: block; margin: 10px 0; cursor: pointer;">
                  <input type="radio" name="answer" value="${index}" style="margin-right: 10px;">
                  ${option}
                </label>
              `).join('')}
            </div>
            <button id="next-question"
              style="border-radius: 60px;
                background: rgb(32, 32, 39);
                color: rgb(255, 255, 255);
                font-family: Montserrat;
                font-size: 24px;
                font-weight: 600;
                line-height: 141.69%;
                letter-spacing: 0%;
                text-align: center;
                width: 300px;
                height: 66px;
                margin-top: 20px;"
            >
              ${questionIndex < quiz.length - 1 ? 'Следующий вопрос' : 'Завершить викторину'}
            </button>
          </div>
        `;

        const nextButton = container.querySelector('#next-question');
        nextButton.addEventListener('click', () => {
          const selectedOption = container.querySelector('input[name="answer"]:checked');
          
          if (!selectedOption) {
            alert('Пожалуйста, выберите ответ!');
            return;
          }
          
          userAnswers[questionIndex] = parseInt(selectedOption.value);
          
          if (questionIndex < quiz.length - 1) {
            showQuestion(questionIndex + 1);
          } else {
            calculateScore();
          }
        });
      }

      function calculateScore() {
        score = 0;
        for (let i = 0; i < quiz.length; i++) {
          if (userAnswers[i] === quiz[i].correctAnswer) {
            score++;
          }
        }
        
        quizContainer.style.display = 'none';
        quizResult.style.display = 'block';
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
      }

      restartButton.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        quizContainer.style.display = 'block';
        quizResult.style.display = 'none';
        showQuestion(0);
      });

      showQuestion(0);
    }
  },

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