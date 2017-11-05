import { startGame } from '../index';


function isNumberAPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n <= 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }

    i += 6;
  }

  return true;
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
