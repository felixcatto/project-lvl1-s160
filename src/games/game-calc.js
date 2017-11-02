import { startGame } from '../index';


const operations = ['+', '-', '*'];

const gameOptions = {
  description: 'What is the result of the expression?',
  getData: () => {
    const num1 = Math.round(Math.random() * 10);
    const num2 = Math.round(Math.random() * 10);
    const operation = operations[Math.floor(Math.random() * 3)];
    const question = `${num1} ${operation} ${num2}`;
    let correctAnswer;
    if (operation === '+') {
      correctAnswer = num1 + num2;
    } else if (operation === '-') {
      correctAnswer = num1 - num2;
    } else if (operation === '*') {
      correctAnswer = num1 * num2;
    }

    return {
      question,
      correctAnswer: correctAnswer.toString(),
    };
  },
};

export const startCalcGame = () => startGame(gameOptions);
