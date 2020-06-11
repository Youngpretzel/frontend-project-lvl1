import { generateRandomNum } from '../utilits.js';
import playBrainGame from '../index.js';

const condition = 'What number is missing in the progression?';
const countNumProgression = 10;

const getProgression = () => {
  const firstNum = generateRandomNum(0, 50);
  const interval = generateRandomNum(1, 10);
  const arithmeticProgression = [firstNum];
  for (let i = 1; i < countNumProgression; i += 1) {
    const nextNum = arithmeticProgression[i - 1] + interval;
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
  const question = progression.join(' ');
  return [question, answer];
};

const playBrainProgression = () => playBrainGame(getQuestionAnswer, condition);

export default playBrainProgression;
