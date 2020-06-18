import readlineSync from 'readline-sync';

const countRound = 3;

const playBrainGame = (getQuestionAnswer, condition) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I Have your name? ');
  console.log(condition);
  for (let i = 0; i < countRound; i += 1) {
    const [question, answer] = getQuestionAnswer();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    console.log('Correct!');
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainGame;
