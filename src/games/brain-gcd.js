import randomNum from '../utilits.js';
import playBrainGame from '../cli.js';

export const condition = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let i = num1;
  while (num1 % i !== 0 || num2 % i !== 0) {
    i -= 1;
  }
  return i;
};

const getQuestionAnswer = () => {
  const randomNumber1 = randomNum(1, 20);
  const randomNumber2 = randomNum(1, 20);
  const result = gcd(randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${randomNumber2}`;
  return [question, String(result)];
};

export const brainGcd = () => playBrainGame(getQuestionAnswer, condition);
