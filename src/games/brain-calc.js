import randomNum from '../utilits.js';
import playBrainGame from '../cli.js';

export const condition = 'What is the result of the expression?';
const getOperators = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  return `${randomOperator}`;
};

const getResultCalc = (a, b, oper) => {
  let resultCalc = 0;
  if (oper === '+') {
    resultCalc = a + b;
  }
  if (oper === '-') {
    resultCalc = a - b;
  }
  if (oper === '*') {
    resultCalc = a * b;
  }

  return resultCalc;
};

const getQuestionAnswer = () => {
  const oper = getOperators();
  const a = randomNum(1, 10);
  const b = randomNum(1, 10);
  const answer = getResultCalc(a, b, oper);
  const question = `${a} ${oper} ${b}`;
  return [question, String(answer)];
};

export const brainCalc = () => playBrainGame(getQuestionAnswer, condition);
