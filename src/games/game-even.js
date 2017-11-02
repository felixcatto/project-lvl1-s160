import { startGame } from '../index';


const gameOptions = {
  description: 'Answer "yes" if number even otherwise answer "no".',
  makeQuestion: () => Math.round(Math.random() * 100),
  getCorrectAnswer: question => (question % 2 === 0 ? 'yes' : 'no'),
};

export const startEvenGame = () => startGame(gameOptions);
