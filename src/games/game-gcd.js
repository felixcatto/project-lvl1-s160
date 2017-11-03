import { startGame } from '../index';


const gameOptions = {
  description: 'Find the greatest common divisor of given numbers.',
  getData: () => {
    let a = Math.round(Math.random() * 40);
    let b = Math.round(Math.random() * 40);
    const question = `${a} ${b}`;
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a = a % b;
      } else {
        b = b % a;
      }
    }

    const correctAnswer = (a + b).toString();
    return { question, correctAnswer };
  },
};

export const startGcdGame = () => startGame(gameOptions);
