import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log(userName());
const countRound = 3;

const playBrainGame = (getQuestionAnswer, condition) => {
  console.log(condition);
  for (let i = 0; i < countRound;) {
    const [question, answer] = getQuestionAnswer();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (answer === userAnswer) {
      console.log('Correct!');
      i += 1;
      if (i === countRound) {
        console.log('Congratulations, John!');
      }
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, John!`);
      break;
    }
  }
};

export default playBrainGame;
