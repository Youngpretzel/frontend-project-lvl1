import { generateRandomNum } from '../utilits.js';
import playBrainGame from '../index.js';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (firstNum, interval) => {
  const arithmeticProgression = [firstNum];
  for (let i = 1; i < progressionLength; i += 1) {
    const previousNum = arithmeticProgression[i - 1];
    const nextNum = previousNum + interval;
    arithmeticProgression.push(nextNum);
  }
  return arithmeticProgression;
};

const getQuestionAnswer = () => {
  const firstNum = generateRandomNum(0, 50);
  const interval = generateRandomNum(1, 10);
  const progression = getProgression(firstNum, interval);
  const hiddenNumIndex = generateRandomNum(0, progression.length - 1);
  const correctAnswer = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';
  const answer = String(correctAnswer);
  const question = progression.join(' ');
  return [question, answer];
};

const playBrainProgression = () => playBrainGame(getQuestionAnswer, condition);

export default playBrainProgression;
