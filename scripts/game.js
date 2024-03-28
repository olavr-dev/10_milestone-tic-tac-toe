function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    startNewGameErrorElement.style.display = 'block';
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = 'block';
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  event.target.innerHTML = players[activePlayer].symbol;
  event.target.classList.add('disabled');
  switchPlayer();
}
