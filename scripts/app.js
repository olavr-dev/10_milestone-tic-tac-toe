let editedPlayer = 0;
let activePlayer = 0;

const players = [
  {
    name: '',
    symbol: '<i class="fa-solid fa-x"></i>',
  },
  {
    name: '',
    symbol: '<i class="fa-solid fa-o"></i>',
  },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');

const editPlayerOneBtnElement = document.getElementById('edit-player-1-btn');
const editPlayerTwoBtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-button');
const startNewGameBtnElement = document.getElementById('start-new-game-btn');
const startNewGameErrorElement = document.getElementById('new-game-error');
const gameFieldElements = document.querySelectorAll('#game-board li');

editPlayerOneBtnElement.addEventListener('click', openPlayerConfig);
editPlayerTwoBtnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener('click', selectGameField);
}
