import { randomNum } from '../utilits.js';
import playBrainGame from '../cli.js';

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const hasParityСheck = (num) => num % 2 === 0;

const getQuestionAnswer = () => {
  const question = randomNum(0, 100);
  const result = hasParityСheck(question) ? 'yes' : 'no';
  return [question, result];
};

export const playBrainEven = () => playBrainGame(getQuestionAnswer, condition);
