import { generateRandomNum } from '../utilits.js';
import playBrainGame from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrimeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const randomNum = generateRandomNum(2, 100);
  const answer = (isPrimeNum(randomNum)) ? 'yes' : 'no';
  const question = randomNum;
  return [question, answer];
};

const playBrainPrime = () => playBrainGame(getQuestionAnswer, condition);

export default playBrainPrime;
