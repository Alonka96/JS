
const sumAllArrow = (...array) => {
  const sum = array.reduce((accumulator, current) => accumulator + current, 0);
  return sum;
};
