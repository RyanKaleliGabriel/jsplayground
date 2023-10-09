//The reduce() function is a built-in method in JavaScript used with arrays
//to reduce the array to a single value.
//It applies a specified callback function to each element of the array (from left to right)
//to accumulate and combine the values.

const arr = [4, 689, 4, 2, 5, 83, 25];
const sum = arr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);
