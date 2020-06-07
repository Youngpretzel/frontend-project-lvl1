import playBrainGame from '../cli.js';
import { getOperators, randomNum } from '../utilits.js';

export const condition = 'What is the result of the expression?';

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
  const rightAnswer = String(getResultCalc(a, b, oper));
  const question = `${a} ${oper} ${b}`;
  return [question, rightAnswer];
};

export const playBrainCalc = () => playBrainGame(getQuestionAnswer, condition);
