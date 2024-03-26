const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');

const editPlayerOneBtnElement = document.getElementById('edit-player-1-btn');
const editPlayerTwoBtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-button');

editPlayerOneBtnElement.addEventListener('click', openPlayerConfig);
editPlayerTwoBtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
