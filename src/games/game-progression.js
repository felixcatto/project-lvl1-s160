import { startGame } from '../index';

const progressionLength = 10;

function makeRange(start, length) {
  return Array.from(Array(length).keys()).map(el => el + start);
}

function makeProgression(a1, d, length) {
  const getNthElment = n => a1 + ((n - 1) * d);
  return makeRange(1, length).map(getNthElment);
}

function progressionToString(progression, indexOfHiddenEl) {
  return progression
    .reduce((acc, el, i) => (i === indexOfHiddenEl ? `${acc} ..` : `${acc} ${el}`), '');
}

const gameOptions = {
  description: 'What number is missing in this progression?',
  getData: () => {
    const a1 = Math.floor(Math.random() * 10);
    const d = Math.floor(Math.random() * 5);
    const indexOfHiddenEl = Math.floor(Math.random() * progressionLength);
    const progression = makeProgression(a1, d, progressionLength);
    const question = progressionToString(progression, indexOfHiddenEl);
    const correctAnswer = progression[indexOfHiddenEl].toString();
    return { question, correctAnswer };
  },
};

export const startProgressionGame = () => startGame(gameOptions);
