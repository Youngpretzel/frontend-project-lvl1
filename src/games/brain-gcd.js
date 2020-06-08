import { generateRandomNum } from '../utilits.js';
import playBrainGame from '../cli.js';

export const condition = 'Find the greatest common divisor of given numbers.';

const hasGcd = (num1, num2) => {
  let i = num1;
  while (num1 % i !== 0 || num2 % i !== 0) {
    i -= 1;
  }
  return i;
};

const getQuestionAnswer = () => {
  const firstNum = generateRandomNum(1, 20);
  const secondNum = generateRandomNum(1, 20);
  const rightAnswer = String(hasGcd(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  return [question, rightAnswer];
};

export const playBrainGcd = () => playBrainGame(getQuestionAnswer, condition);
