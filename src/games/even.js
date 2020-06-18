import { generateRandomNum } from '../utilits.js';
import playBrainGame from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAnswer = () => {
  const question = generateRandomNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const playBrainEven = () => playBrainGame(getQuestionAnswer, condition);

export default playBrainEven;
