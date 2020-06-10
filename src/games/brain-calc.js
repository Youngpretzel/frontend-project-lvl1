import playBrainGame from '../index.js';
import { generateRandomNum } from '../utilits.js';

const condition = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return randomOperator;
};

const getСalculation = (firstNum, secondNum, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result += firstNum + secondNum;
      break;
    case '-':
      result += firstNum - secondNum;
      break;
    case '*':
      result += firstNum * secondNum;
      break;
    case '/':
      result += firstNum / secondNum;
      break;
    default:
      Error(`Unknown operator: ${operator}!`);
  }
  return result;
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
