function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // +'1' => 1

  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.children[0].children[1].value = '';
  startNewGameErrorElement.style.display = 'none';
}

function savePlayerConfig(event) {
  // Built in JavaScript function to disable HTTP request
  event.preventDefault();
  // FormData() is built in JavaScript blueprint
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('player-name').trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name';
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    'player-' + editedPlayer + '-data'
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
