import readlineSync from 'readline-sync';

export function greetUser() {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
}
