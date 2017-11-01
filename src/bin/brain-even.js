#!/usr/bin/env node
import { greetUser, askQuestion, respondToAnswer, isAnswerCorrect, getRandomNumber } from '../index';

console.log('Welcome to Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

let countOfRightAnswers = 0;
const countAnswersForWin = 3;
const isUserFinishedGame = () => countOfRightAnswers === countAnswersForWin;
const username = greetUser();

while (!isUserFinishedGame()) {
  const number = getRandomNumber();
  const answer = askQuestion(number);
  const isRightAnswer = isAnswerCorrect(answer, number);
  respondToAnswer(username, answer, isRightAnswer);
  if (isRightAnswer) {
    countOfRightAnswers += 1;
  }
}

console.log(`Congratulations, ${username}!`);
