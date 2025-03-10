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
