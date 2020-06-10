import generateRandomNum from '../utilits.js';
import playBrainGame from '../index.js';


const condition = 'What number is missing in the progression?';

const getSequenceOfNumbers = () => {
  const countNumProgression = 9;
  const firstNum = generateRandomNum(1, 50);
  const interval = generateRandomNum(1, 10);
  const arithmeticProgression = [firstNum];
  for (let i = 0; i < countNumProgression; i += 1) {
    const nextNum = arithmeticProgression[i] + interval;
    arithmeticProgression.push(nextNum);
  }
  const hiddenNumIndex = generateRandomNum(0, 9);
  const correctAnswer = arithmeticProgression[hiddenNumIndex];
  arithmeticProgression[hiddenNumIndex] = '..';
  return [arithmeticProgression, correctAnswer];
};

const getQuestionAnswer = () => {
  const progression = getSequenceOfNumbers();
  const answer = String(progression[1]);
  const question = `${progression[0]}`;
  return [question, answer];
};

const playBrainProgression = () => playBrainGame(getQuestionAnswer, condition);

export default playBrainProgression;
