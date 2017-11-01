import readlineSync from 'readline-sync';


export function greetUser() {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
}

export function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

export function askQuestion(number) {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

export function isAnswerCorrect(answer, number) {
  const isEven = number % 2 === 0;
  return (answer === 'yes' && isEven) || (answer === 'no' && !isEven);
}

const allowedAnswers = ['yes', 'no'];

export function respondToAnswer(username, answer, isRightAnswer) {
  if (!allowedAnswers.includes(answer)) {
    console.log('allowed answers - ["yes", "no"]');
    console.log(`Let's try again, ${username}!\n`);
  } else if (isRightAnswer) {
    console.log('Correct!');
  } else if (!isRightAnswer) {
    const oppositeAnwer = answer === 'yes' ? 'no' : 'yes';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${oppositeAnwer}'`);
    console.log(`Let's try again, ${username}!\n`);
  }
}
