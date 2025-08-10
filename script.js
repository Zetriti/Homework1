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
      const result = container.querySelector('.result');
      
      checkBtn.addEventListener('click', () => {
        const guess = parseInt(container.querySelector('input').value);
        if (guess === secretNumber) {
          result.textContent = `Поздравляем! Вы угадали число ${secretNumber}`;
          secretNumber = Math.floor(Math.random() * 100) + 1;
        } else {
          result.textContent = guess > secretNumber ? "Слишком много!" : "Слишком мало!";
        }
      });
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