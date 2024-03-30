function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="winner-game">PLAYER NAME</span>! 🥳👏';
  gameOverElement.style.display = 'none';
  yourTurnElement.style.display = 'block';

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameFieldItemElement = gameFieldElements.children[gameBoardIndex];
      gameFieldItemElement.textContent = '';
      gameFieldItemElement.classList.remove('disabled');
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    startNewGameErrorElement.style.display = 'block';
    return;
  }
  resetGameStatus();
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
  if (event.target.tagName != 'LI' || gameIsOver) {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    gameFieldErrorElement.style.display = 'block';
    return;
  }

  selectedField.innerHTML = players[activePlayer].symbol;
  selectedField.classList.add('disabled');

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }

  gameFieldErrorElement.style.display = 'none';
  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  // Checking the rows for equality
  for (let index = 0; index < 3; index++) {
    if (
      gameData[index][0] > 0 &&
      gameData[index][0] === gameData[index][1] &&
      gameData[index][1] === gameData[index][2]
    ) {
      return gameData[index][0];
    }
  }
  // Checking the columns for equality
  for (let index = 0; index < 3; index++) {
    if (
      gameData[0][index] > 0 &&
      gameData[0][index] === gameData[1][index] &&
      gameData[0][index] === gameData[2][index]
    ) {
      return gameData[0][index];
    }
  }
  // Checking for diagonal equality - top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  // Checking for diagonal equality - bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverElement.style.display = 'block';
  yourTurnElement.style.display = 'none';

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw! 🥲🙈";
  }
}
