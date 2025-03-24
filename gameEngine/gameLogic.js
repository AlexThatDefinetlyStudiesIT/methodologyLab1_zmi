import readlineSync from 'readline-sync';
import NOKGame from '../games/NOK/index.js';
import GeomGame from '../games/Geom/index.js';

let playerName = '';

function chooseGame() {
  const validChoices = { 1: NOKGame, 2: GeomGame };
  let gameChoice;
  do {
    gameChoice = readlineSync.question(
      'Choose a game: 1 - NOK, 2 - Geometrical Progression \n',
    );
    if (!validChoices[gameChoice]) {
      console.log('Invalid choice, please select 1 or 2.');
    }
  } while (!validChoices[gameChoice]);
  for (let i = 0; i < 3; i++) {
    validChoices[gameChoice](playerName);
  }
}

function startGame() {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}! Let's begin the game.`);
  chooseGame();
}

startGame();
