import randomNum from '../utilits.js';
import playBrainGame from '../cli.js';


export const condition = 'What number is missing in the progression?';

const getProgressionNum = () => {
  const countNumProgression = 9;
  const firstNum = randomNum(1, 50);
  const interval = randomNum(2, 5);
  const arithmeticProgression = [firstNum];
  for (let x = 0; x < countNumProgression; x += 1) {
    const nextNum = arithmeticProgression[x] + interval;
    arithmeticProgression.push(nextNum);
  }
  const hiddenNumIndex = randomNum(0, 9);
  const correctAnswer = arithmeticProgression[hiddenNumIndex];
  arithmeticProgression[hiddenNumIndex] = '..';
  return [arithmeticProgression, correctAnswer];
};

const getQuestionAnswer = () => {
  const progression = getProgressionNum();
  const answer = progression[1];
  const question = `${progression[0]}`;
  return [question, String(answer)];
};

export const brainProgression = () => playBrainGame(getQuestionAnswer, condition);
