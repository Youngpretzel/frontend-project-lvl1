import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const condEOrNotEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const condCalc = 'What is the result of the expression?';
const condGcd = 'Find the greatest common divisor of given numbers.';

export const greetUser = () => {
  console.log(`Hello, ${userName}!`);
};

export const brainGcd = () => {
  console.log(condGcd);
  const gcd = (num1, num2) => {
    let i = num1;
    while (num1 % i !== 0 || num2 % i !== 0) {
      i -= 1;
    }
    return i;
  };
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);

    const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2} \nYour answer: `);
    if (gcd(randomNumber1, randomNumber2) === Number(userAnswer)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (gcd(randomNumber1, randomNumber2) !== Number(userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gcd(randomNumber1, randomNumber2)}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export const gameCalc = () => {
  console.log(condCalc);
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const operators = ['+', '-', '*'];
    const randomOperators = operators[Math.floor(Math.random() * operators.length)];
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);

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
  console.log(condEOrNotEven);
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const randomNumber = Math.floor(Math.random() * 10);
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
