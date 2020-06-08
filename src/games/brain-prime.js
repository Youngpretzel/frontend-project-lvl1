import { generateRandomNum } from '../utilits.js';
import playBrainGame from '../cli.js';

export const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const hasPrimeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAnswer = () => {
  const randomNumber = generateRandomNum(1, 23);
  const rightAnswer = String(hasPrimeNum(randomNumber));
  const question = `${randomNumber}`;
  return [question, rightAnswer];
};

export const playBrainPrime = () => playBrainGame(getQuestionAnswer, condition);
