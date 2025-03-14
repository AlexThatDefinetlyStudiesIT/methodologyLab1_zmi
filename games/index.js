import readlineSync from 'readline-sync';
import NOKGame from './NOK/index.js';
import GeomGame from './Geom/index.js';

let playerName = '';

function chooseGame() {
  const gameChoice = readlineSync.question('Choose a game: 1 - NOK, 2 - Geom: ');

  if (gameChoice === '1') {
    for (let i = 0; i < 3; i++) {
      NOKGame(playerName);
    }
  } else if (gameChoice === '2') {
    for (let i = 0; i < 3; i++) {
      GeomGame(playerName);
    }
  } else {
    console.log('Invalid choice, please select 1 or 2.');
    chooseGame();
  }
}

function startGame() {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}! Let's begin the game.`);
  chooseGame();
}

startGame();
