import readlineSync from 'readline-sync';
import { RNG1, checkAnswer } from '../RNG.js';

function askQuestion(question) {
  return readlineSync.question(question);
}

function GeomGame(playerName) {
  console.log('What number is missing in the progression?');
  const length = RNG1(5, 12);
  const answerPosition = RNG1(0, length - 1);
  const b = RNG1(1, 12);
  const q = RNG1(2, 5);
  const progressionNumbers = [];
  let questionText = 'Question: ';
  let correctAnswer;
  for (let i = 0; i < length; i++) {
    progressionNumbers.push(b * (q ** i));
    if (i === answerPosition) {
      correctAnswer = b * (q ** i);
      questionText += '... ';
    } else {
      questionText += `${b * (q ** i)} `;
    }
  }
  console.log(questionText);
  const userAnswer = askQuestion('Your answer: ');
  checkAnswer(userAnswer, correctAnswer, playerName);
}

export default GeomGame;
