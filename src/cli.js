/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I Have your name? ');
  console.log(`Hello, ${userName}!`);
};
