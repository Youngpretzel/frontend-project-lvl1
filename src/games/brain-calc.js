import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

const playGameCalc = () => {
  console.log('What is the result of the expression?');
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const operators = ['+', '-', '*'];
    const randomOperators = operators[Math.floor(Math.random() * operators.length)];
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const calculation = () => {
      let calc = 0;
      if (randomOperators === '+') {
        calc = randomNumber1 + randomNumber2;
      }
      if (randomOperators === '-') {
        calc = randomNumber1 - randomNumber2;
      }
      if (randomOperators === '*') {
        calc = randomNumber1 * randomNumber2;
      }
      return calc;
    };
    const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${randomOperators} ${randomNumber2} \nYour answer: `);
    if (calculation() === Number(userAnswer)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (calculation() !== Number(userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${calculation()}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default playGameCalc;
