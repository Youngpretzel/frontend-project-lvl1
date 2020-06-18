import playBrainGame from '../index.js';
import { generateRandomNum } from '../utilits.js';

const condition = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[generateRandomNum(0, operators.length - 1)];
  return randomOperator;
};

const getСalculation = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error('Unknown operator!');
  }
};

const getQuestionAnswer = () => {
  const operator = getOperator();
  const firstNum = generateRandomNum(1, 10);
  const secondNum = generateRandomNum(1, 10);
  const answer = String(getСalculation(firstNum, secondNum, operator));
  const question = `${firstNum} ${operator} ${secondNum}`;
  return [question, answer];
};

const playBrainCalc = () => playBrainGame(getQuestionAnswer, condition);

export default playBrainCalc;
