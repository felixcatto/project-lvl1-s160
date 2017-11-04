import { startGame } from '../index';


function makeRangeInclusive(start, end) {
  return Array.from(Array(end - start + 1).keys()).map(el => el + start);
}

function makePrimeNumbers(number) {
  if (number <= 1) return [];

  const range = makeRangeInclusive(2, number);
  const iter = (acc, indexOfFilterNumber) => {
    if (indexOfFilterNumber + 1 === acc.length) {
      return acc;
    }

    const filterNumber = acc[indexOfFilterNumber];
    const newAcc = acc.filter((el, i) => el % filterNumber !== 0 || i <= indexOfFilterNumber);
    return iter(newAcc, indexOfFilterNumber + 1);
  };

  return iter(range, 0);
}

function isNumberAPrime(number) {
  const primeNumbers = makePrimeNumbers(number);
  return primeNumbers.includes(number);
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
