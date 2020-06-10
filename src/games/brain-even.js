import generateRandomNum from '../utilits.js';
import playBrainGame from '../index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParityСheck = (num) => num % 2 === 0;

const getQuestionAnswer = () => {
  const question = generateRandomNum(0, 100);
  const answer = isParityСheck(question) ? 'yes' : 'no';
  return [question, answer];
};

const playBrainEven = () => playBrainGame(getQuestionAnswer, condition);

export default playBrainEven;
