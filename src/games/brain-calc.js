import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

const playGameCalc = () => {
  console.log('What is the result of the expression?');
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const randomNum1 = Math.floor(Math.random() * 10);
    const randomNum2 = Math.floor(Math.random() * 10);
    const calculate = () => {
      let resultCalc = 0;
      if (randomOperator === '+') {
        resultCalc = randomNum1 + randomNum2;
      }
      if (randomOperator === '-') {
        resultCalc = randomNum1 - randomNum2;
      }
      if (randomOperator === '*') {
        resultCalc = randomNum1 * randomNum2;
      }
      return resultCalc;
    };
    const userAnswer = readlineSync.question(`Question: ${randomNum1} ${randomOperator} ${randomNum2} \nYour answer: `);
    if (calculate() === Number(userAnswer)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (calculate() !== Number(userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${calculate()}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default playGameCalc;
