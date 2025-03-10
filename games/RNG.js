export function RNG1(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function RNGMore(min, max, amount) {
  const randomNumbers = [];
  for (let i = 0; i < amount; i++) {
    randomNumbers.push(RNG1(min, max));
  }
  return randomNumbers;
}

export function checkAnswer(userAnswer, correctAnswer, playerName) {
  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('Correct!');
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
  }
}
