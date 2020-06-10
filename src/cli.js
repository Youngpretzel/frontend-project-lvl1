import readlineSync from 'readline-sync';

const userName = () => {
  const greetUser = readlineSync.question('Welcome to the Brain Games!\nMay I Have your name? ');
  return `Hello, ${greetUser}!`;
};

export default userName;
