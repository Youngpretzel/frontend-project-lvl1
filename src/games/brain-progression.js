import { generateRandomNum } from '../utilits.js';
import playBrainGame from '../index.js';


const condition = 'What number is missing in the progression?';

const getProgression = () => {
  const countNumProgression = 9;
  const firstNum = generateRandomNum(1, 50);
  const interval = generateRandomNum(1, 10);
  const arithmeticProgression = [firstNum];
  for (let i = 0; i < countNumProgression; i += 1) {
    const nextNum = arithmeticProgression[i] + interval;
    arithmeticProgression.push(nextNum);
  }
  return arithmeticProgression;
};

const getQuestionAnswer = () => {
  const progression = getProgression();
  const hiddenNumIndex = generateRandomNum(0, 9);
  const correctAnswer = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';
  const answer = String(correctAnswer);
  const question = `${progression}`;
  return [question, answer];
};

const playBrainProgression = () => playBrainGame(getQuestionAnswer, condition);

export default playBrainProgression;
