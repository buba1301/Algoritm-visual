const getRandomNumber = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min) + min);
};

export const createArray = (count) => {
  const res = [];

  return res.reduce((acc, item) => acc.push(getRandomNumber(30, 600)), []);
};

export default createArray;
