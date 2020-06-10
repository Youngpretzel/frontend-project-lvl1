import readlineSync from 'readline-sync';
import { getUserName } from './cli.js';


const countRound = 3;

const playBrainGame = (getQuestionAnswer, condition) => {
  getUserName();
  console.log(condition);
  for (let i = 0; i < countRound; i += 1) {
    const [question, answer] = getQuestionAnswer();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    console.log('Correct!');
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, John!`);
      return;
    }
  }
  console.log('Congratulations, John!');
};

export default playBrainGame;
