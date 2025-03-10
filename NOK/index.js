import readlineSync from 'readline-sync';

let isRunning = true;
let playerName = '';

function gcd2(a, b) {
  if (!b) return b === 0 ? a : NaN;
  return gcd2(b, a % b);
}

function gcd(array) {
  let n = 0;
  for (let i = 0; i < array.length; i += 1) {
    n = gcd2(array[i], n);
  }
  return n;
}

function askQuestion(question) {
  return readlineSync.question(question);
}

function NOKGame() {
  console.log('Find the smallest common multiple of given numbers.');
  const num1 = Math.floor(Math.random() * 1000) + 1;
  const num2 = Math.floor(Math.random() * 1000) + 1;
  const num3 = Math.floor(Math.random() * 1000) + 1;

  console.log(`Question: ${num1} ${num2} ${num3}`);

  const userAnswer = askQuestion('Your answer: ');

  const correctAnswer = gcd([num1, num2, num3]);

  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('Correct!');
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
  }
}

function gameLoop() {
  if (!isRunning) {
    return;
  }

  for (let i = 0; i < 3; i += 1) {
    NOKGame();
  }

  isRunning = false;
}

function startGame() {
  console.log(`Hello, ${playerName}! Let's begin the game.`);
  gameLoop();
}

function askPlayerName() {
  playerName = readlineSync.question('May I have your name? ');
  startGame();
}

console.log('Welcome to the Brain Games!');
askPlayerName();
