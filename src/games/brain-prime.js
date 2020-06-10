import generateRandomNum from '../utilits.js';
import playBrainGame from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrimeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAnswer = () => {
  const randomNumber = generateRandomNum(1, 23);
  const answer = String(isPrimeNum(randomNumber));
  const question = `${randomNumber}`;
  return [question, answer];
};

const playBrainPrime = () => playBrainGame(getQuestionAnswer, condition);

export default playBrainPrime;
