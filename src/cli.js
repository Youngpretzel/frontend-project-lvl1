import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const result = 'What is the result of the expression?';

export const greetUser = () => {
  console.log(`Hello, ${userName}!`);
};

export const gameCalc = () => {
  console.log(result);
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const randomNumber1 = Math.floor(Math.random() * 5);
    const randomNumber2 = Math.floor(Math.random() * 5);
    const operators = ['+', '-', '*'];
    const randomOperators = operators[Math.floor(Math.random() * operators.length)];
    const calculation = () => {
      let calc = 0;
      if (randomOperators === '+') {
        calc = randomNumber1 + randomNumber2;
      }
      if (randomOperators === '-') {
        calc = randomNumber1 - randomNumber2;
      }
      if (randomOperators === '*') {
        calc = randomNumber1 * randomNumber2;
      }
      return calc;
    };
    const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${randomOperators} ${randomNumber2} \nYour answer: `);
    if (calculation() === Number(userAnswer)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (calculation() !== Number(userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${calculation()}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export const parityCheck = () => {
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
