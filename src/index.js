import readlineSync from 'readline-sync';


let countOfRightAnswers = 0;
const countAnswersForWin = 3;
const isUserFinishedGame = () => countOfRightAnswers === countAnswersForWin;

export function askUsername() {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
}

function askQuestion(question) {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

export function startGame(game) {
  console.log('Welcome to the Brain Games!');
  console.log(`${game.description}\n`);
  const username = askUsername();

  while (!isUserFinishedGame()) {
    const { question, correctAnswer } = game.getData();
    const userAnswer = askQuestion(question);
    const isCorrectAnswer = userAnswer === correctAnswer;
    if (isCorrectAnswer) {
      console.log('Correct!');
      countOfRightAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${username}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
}
