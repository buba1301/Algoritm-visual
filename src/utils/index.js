const getRandomNumber = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min) + min);
};

const createArray = (lenght) => {
  const res = [];

  for (let i = 0; i < lenght; i++) {
    const newValue = getRandomNumber(30, 600);

    res.push(newValue);
  }

  return res;
};

export default createArray;
