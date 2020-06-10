/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';

export const getUserName = () => {
  const greetUser = readlineSync.question('Welcome to the Brain Games!\nMay I Have your name? ');
  return (`Hello, ${greetUser}!`);
};
