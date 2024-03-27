function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    startNewGameErrorElement.style.display = 'block';
    return;
  }
  gameAreaElement.style.display = 'block';
}
