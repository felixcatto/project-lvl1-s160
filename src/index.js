import readlineSync from 'readline-sync';


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
  const countAnswersForWin = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${game.description}\n`);
  const username = askUsername();

  const iter = (countOfRightAnswers) => {
    if (countOfRightAnswers === countAnswersForWin) {
      console.log(`Congratulations, ${username}!`);
      return false;
    }

    const { question, correctAnswer } = game.getData();
    const userAnswer = askQuestion(question);
    const isCorrectAnswer = userAnswer === correctAnswer;
    if (!isCorrectAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${username}!\n`);
      return false;
    }

    console.log('Correct!');
    return iter(countOfRightAnswers + 1);
  };

  iter(0);
}
