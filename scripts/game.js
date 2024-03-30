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
  if (event.target.tagName != 'LI') {
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
  console.log(winnerId);

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
