const sumAll = (...args) => {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
};

const result = sumAll(7, 2, 4, 8, 9, 2);
console.log(result);
