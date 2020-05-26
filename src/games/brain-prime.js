import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

const playGamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const primeNum = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const randomNumber = Math.floor(Math.random() * 23);
    const userAnswer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
    if (primeNum(randomNumber) === userAnswer) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (primeNum(randomNumber) !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${primeNum(randomNumber)}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default playGamePrime;
