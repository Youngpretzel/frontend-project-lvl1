import playBrainGame from '../cli.js';
import { getOperator, generateRandomNum } from '../utilits.js';

export const condition = 'What is the result of the expression?';

const generateCalc = (firstNum, secondNum, operator) => {
  let resultCalc = 0;
  if (operator === '+') {
    resultCalc = firstNum + secondNum;
  }
  if (operator === '-') {
    resultCalc = firstNum - secondNum;
  }
  if (operator === '*') {
    resultCalc = firstNum * secondNum;
  }
  return resultCalc;
};

const getQuestionAnswer = () => {
  const operator = getOperator();
  const firstNum = generateRandomNum(1, 10);
  const secondNum = generateRandomNum(1, 10);
  const rightAnswer = String(generateCalc(firstNum, secondNum, operator));
  const question = `${firstNum} ${operator} ${secondNum}`;
  return [question, rightAnswer];
};

export const playBrainCalc = () => playBrainGame(getQuestionAnswer, condition);
