import randomNum from '../utilits.js';
import playBrainGame from '../cli.js';

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityСheck = (num) => num % 2 === 0;

const getQuestionAnswer = () => {
  const question = randomNum(0, 100);
  const result = parityСheck(question) ? 'yes' : 'no';
  return [question, result];
};

export const brainEven = () => playBrainGame(getQuestionAnswer, condition);
