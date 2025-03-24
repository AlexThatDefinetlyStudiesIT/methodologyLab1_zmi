
import { RNGMore, askQuestion, checkAnswer } from '../gameLogic.js';

function gcd2(a, b) {
  if (!b) return b === 0 ? a : NaN;
  return gcd2(b, a % b);
}

function lcm2(a, b) {
  return (a * b) / gcd2(a, b);
}

function lcm(arr) {
  return arr.reduce((acc, num) => lcm2(acc, num), 1);
}



function NOKGame(playerName) {
  console.log('Find the smallest common multiple of given numbers.');
  const RN3 = RNGMore(1, 200, 3);
  console.log(`Question: ${RN3[0]} ${RN3[1]} ${RN3[2]}`);
  const userAnswer = askQuestion('Your answer: ');
  const correctAnswer = lcm(RN3);
  checkAnswer(userAnswer, correctAnswer, playerName);
}

export default NOKGame;
