import { startGame } from '../index';


function isNumberAPrime(number) {
  if (number <= 1) {
    return false;
  } else if (number <= 3) {
    return true;
  }

  const iter = (divisor) => {
    if (divisor === number) {
      return true;
    }

    if (number % divisor === 0) {
      return false;
    }

    return iter(divisor + 1);
  };

  return iter(2);
}

const gameOptions = {
  description: 'Is number a prime?',
  getData: () => {
    const number = Math.floor(Math.random() * 100);
    const question = number.toString();
    const correctAnswer = isNumberAPrime(number) ? 'yes' : 'no';
    return { question, correctAnswer };
  },
};

export const startPrimeGame = () => startGame(gameOptions);
