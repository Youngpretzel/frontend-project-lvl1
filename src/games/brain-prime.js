import randomNum from '../utilits.js';
import playBrainGame from '../cli.js';

export const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAnswer = () => {
  const randomNumber1 = randomNum(1, 23);
  const result = primeNum(randomNumber1);
  const question = `${randomNumber1}`;
  return [question, String(result)];
};

export const brainPrime = () => playBrainGame(getQuestionAnswer, condition);
