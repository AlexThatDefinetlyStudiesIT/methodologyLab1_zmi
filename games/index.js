import readlineSync from 'readline-sync';
import NOKGame from './NOK/index.js';
import GeomGame from './Geom/index.js';

let playerName = '';

function chooseGame() {
  const gameChoice = readlineSync.question('Choose a game: 1 - NOK, 2 - Geom: ');
  for (let i = 0; i < 3; i++) {
    if (gameChoice === '1') {
      NOKGame(playerName);
    } else if (gameChoice === '2') {
      GeomGame(playerName);
    } else {
      console.log('Invalid choice, please select 1 or 2.');
      chooseGame();
      break;
    }
  }
}

function startGame() {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}! Let's begin the game.`);
  chooseGame();
}

startGame();
