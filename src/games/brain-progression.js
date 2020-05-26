import readlineSync from 'readline-sync';
import { userName } from '../cli.js';

const playGameProgression = () => {
  console.log('What number is missing in the progression?');
  const countRound = 3;
  const countNumProgression = 9;
  for (let i = 0; i < countRound;) {
    const firstNum = Math.floor(Math.random() * 50);
    const interval = Math.ceil(Math.random() * 10);
    const arithmeticProgression = [firstNum];
    for (let x = 0; x < countNumProgression; x += 1) {
      const nextNum = arithmeticProgression[x] + interval;
      arithmeticProgression.push(nextNum);
    }
    const hiddenNumIndex = Math.floor(Math.random() * 9);
    const correctAnswer = arithmeticProgression[hiddenNumIndex];
    arithmeticProgression[hiddenNumIndex] = '..';
    const userAnswer = readlineSync.question(`Question: ${arithmeticProgression.join(' ')} \nYour answer: `);
    if (correctAnswer === Number.parseInt(userAnswer, 10)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (correctAnswer !== Number.parseInt(userAnswer, 10)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};
export default playGameProgression;
