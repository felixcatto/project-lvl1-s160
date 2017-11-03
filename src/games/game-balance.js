import { startGame } from '../index';


const getMaxEl = (numbers) => {
  return numbers.reduce((acc, number) => {
    return acc.value > number.value ? acc : number;
  });
};

const getMinEl = (numbers) => {
  return numbers.reduce((acc, number) => {
    return acc.value < number.value ? acc : number;
  });
};

const balanceNubmers = (numbers) => {
  const min = getMinEl(numbers);
  const max = getMaxEl(numbers);
  const isNumbersBalanced = max.value - min.value <= 1;
  if (isNumbersBalanced) return;

  max.value -= 1;
  min.value += 1;
  balanceNubmers(numbers);
};

const gameOptions = {
  description: 'Balance the given number.',
  getData: () => {
    const question = Math.round(Math.random() * 1000);
    const numbers = question
      .toString()
      .split('')
      .map(number => ({ value: +number }));
    balanceNubmers(numbers);
    const correctAnswer = Array.from(numbers, el => el.value)
      .sort()
      .join('');

    return { question, correctAnswer };
  },
};

export const startBalanceGame = () => startGame(gameOptions);
