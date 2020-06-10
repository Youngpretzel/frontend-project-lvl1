import generateRandomNum from '../utilits.js';
import playBrainGame from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNum, secondNum) => {
  let i = firstNum;
  while (firstNum % i !== 0 || secondNum % i !== 0) {
    i -= 1;
  }
  return i;
};

const getQuestionAnswer = () => {
  const firstNum = generateRandomNum(1, 20);
  const secondNum = generateRandomNum(1, 20);
  const answer = String(getGcd(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  return [question, answer];
};

const playBrainGcd = () => playBrainGame(getQuestionAnswer, condition);

export default playBrainGcd;
