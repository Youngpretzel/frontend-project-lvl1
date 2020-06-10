/* eslint-disable import/prefer-default-export */

export const generateRandomNum = (min, max) => {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
};
