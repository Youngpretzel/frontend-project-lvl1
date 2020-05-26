import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

const playGameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const gcd = (num1, num2) => {
    let i = num1;
    while (num1 % i !== 0 || num2 % i !== 0) {
      i -= 1;
    }
    return i;
  };
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2} \nYour answer: `);
    if (gcd(randomNumber1, randomNumber2) === Number(userAnswer)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (gcd(randomNumber1, randomNumber2) !== Number(userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gcd(randomNumber1, randomNumber2)}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default playGameGcd;
