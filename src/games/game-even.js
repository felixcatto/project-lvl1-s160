import { startGame } from '../index';


const gameOptions = {
  description: 'Answer "yes" if number even otherwise answer "no".',
  getData: () => {
    const question = Math.round(Math.random() * 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

    return { question, correctAnswer };
  },
};

export const startEvenGame = () => startGame(gameOptions);
