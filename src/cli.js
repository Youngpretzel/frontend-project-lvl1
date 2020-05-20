import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const greetUser = () => {
  console.log(`Hello, ${userName}!`);
};

const parityCheck = () => {
  const evenOrNotEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } return 'no';
  };
  console.log(condition);
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const randomNumber = Math.floor(Math.random() * 15);
    const userAnswer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
    if (evenOrNotEven(randomNumber) === userAnswer) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (evenOrNotEven(randomNumber) !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${evenOrNotEven(randomNumber)}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export { greetUser, parityCheck };
