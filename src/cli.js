import readlineSync from 'readline-sync';

const playBrainGame = (getQuestionAnswer, condition) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const [question, answer] = getQuestionAnswer();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (answer === userAnswer) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log('Congratulations, John!');
      }
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, John!`);
      break;
    }
  }
};

export default playBrainGame;
