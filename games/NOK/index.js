import readlineSync from 'readline-sync';
import { RNGMore, checkAnswer } from '../RNG.js';

function gcd2(a, b) {
  if (!b) return b === 0 ? a : NaN;
  return gcd2(b, a % b);
}

function gcd(array) {
  let n = 0;
  for (let i = 0; i < array.length; i++) {
    n = gcd2(array[i], n);
  }
  return n;
}

function askQuestion(question) {
  return readlineSync.question(question);
}

function NOKGame(playerName) {
  console.log('Find the smallest common multiple of given numbers.');
  const RN3 = RNGMore(1, 1000, 3);

  console.log(`Question: ${RN3[0]} ${RN3[1]} ${RN3[2]}`);

  const userAnswer = askQuestion('Your answer: ');

  const correctAnswer = gcd(RN3);

  checkAnswer(userAnswer, correctAnswer, playerName);
}

export default NOKGame;
