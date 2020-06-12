import { generateRandomNum } from '../utilits.js';
import playBrainGame from '../index.js';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = () => {
  const firstNum = generateRandomNum(0, 50);
  const interval = generateRandomNum(1, 10);
  const arithmeticProgression = [firstNum];
  for (let i = 1; i < progressionLength; i += 1) {
    const previousNumber = arithmeticProgression[i - 1];
    const nextNum = previousNumber + interval;
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
