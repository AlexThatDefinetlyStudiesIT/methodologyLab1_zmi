import readlineSync from 'readline-sync';
import NOKGame from './NOK/index.js';
import GeomGame from './Geom/index.js';

let playerName = '';

function chooseGame() {
  while (true) {
    const gameChoice = readlineSync.question('Choose a game: 1 - NOK, 2 - Geometrical Progression');

    if (gameChoice === '1' || gameChoice === '2') {
      for (let i = 0; i < 3; i++) {
        if (gameChoice === '1') {
          NOKGame(playerName);
        } else {
          GeomGame(playerName);
        }
      }
      break;
    } else {
      console.log('Invalid choice, please select 1 or 2.');
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
