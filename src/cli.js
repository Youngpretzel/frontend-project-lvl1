import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
console.log(`Hello, ${userName}!`);

const playBrainGame = (getQuestionAnswer, condition) => {
  console.log(condition);
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const [question, rightAnswer] = getQuestionAnswer();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log('Congratulations, John!');
      }
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, John!`);
      break;
    }
  }
};

export default playBrainGame;
