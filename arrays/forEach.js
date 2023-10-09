//forEach() method is a built-in array method in JavaScript that allows you to iterate over
//the elements of an array and perform a specified action (callback function) for each element.

const oddnumbers = [];
const numbers = [132, 57, 357, 964, 258, 972, 248, 245, 6, 356, 134, 74, 224];

numbers.forEach((number) =>
  number % 2 !== 0 ? oddnumbers.push(number) : null
);

console.log(oddnumbers);
