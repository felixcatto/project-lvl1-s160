import { startGame } from '../index';

function getGCD(num1, num2) {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a + b;
}

const gameOptions = {
  description: 'Find the greatest common divisor of given numbers.',
  getData: () => {
    const num1 = Math.round(Math.random() * 40);
    const num2 = Math.round(Math.random() * 40);
    const question = `${num1} ${num2}`;
    const greatestDivisor = getGCD(num1, num2);
    const correctAnswer = greatestDivisor.toString();
    return { question, correctAnswer };
  },
};

export const startGcdGame = () => startGame(gameOptions);
