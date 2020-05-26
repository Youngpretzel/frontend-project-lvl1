import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

const playGameEven = () => {
  const evenOrNotEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } return 'no';
  };
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const randomNumber = Math.floor(Math.random() * 10);
    const userAnswer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
    if (evenOrNotEven(randomNumber) === userAnswer) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (evenOrNotEven(randomNumber) !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${evenOrNotEven(randomNumber)}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default playGameEven;
