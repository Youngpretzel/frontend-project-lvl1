import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const condEOrNotEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const condCalc = 'What is the result of the expression?';
const condGcd = 'Find the greatest common divisor of given numbers.';
const condProgression = 'What number is missing in the progression?';
const condPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

export const gameProgression = () => {
  console.log(condProgression);
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const firstNum = Math.floor(Math.random() * 50);
    const interval = Math.ceil(Math.random() * 10);
    const arithmeticProgression = [firstNum];
    for (let x = 0; x < 9; x += 1) {
      const nextNum = arithmeticProgression[x] + interval;
      arithmeticProgression.push(nextNum);
    }
    const hiddenNumIndex = Math.floor(Math.random() * 9);
    const realAnswer = arithmeticProgression[hiddenNumIndex];
    arithmeticProgression[hiddenNumIndex] = '..';
    const hidden = arithmeticProgression.join(' ');
    const userAnswer = readlineSync.question(`Question: ${hidden} \nYour answer: `);
    if (realAnswer === Number.parseInt(userAnswer, 10)) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (realAnswer !== Number.parseInt(userAnswer, 10)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${realAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export const brainPrime = () => {
  console.log(condPrime);
  const primeNum = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const countRound = 3;
  for (let i = 0; i < countRound;) {
    const randomNumber = Math.floor(Math.random() * 23);
    const userAnswer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
    if (primeNum(randomNumber) === userAnswer) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (primeNum(randomNumber) !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${primeNum(randomNumber)}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};
