import { startGame } from '../index';


const operations = ['+', '-', '*'];

const gameOptions = {
  description: 'What is the result of the expression?',
  makeQuestion: () => {
    const num1 = Math.round(Math.random() * 10);
    const num2 = Math.round(Math.random() * 10);
    const operation = operations[Math.floor(Math.random() * 3)];
    return `${num1} ${operation} ${num2}`;
  },
  getCorrectAnswer: (question) => {
    const parts = question.split(' ');
    const num1 = +parts[0];
    const operation = parts[1];
    const num2 = +parts[2];
    let result;
    if (operation === '+') {
      result = num1 + num2;
    } else if (operation === '-') {
      result = num1 - num2;
    } else if (operation === '*') {
      result = num1 * num2;
    }

    return result.toString();
  },
};

export const startCalcGame = () => startGame(gameOptions);
