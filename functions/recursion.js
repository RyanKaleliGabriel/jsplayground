// A function can call itself.
// For example, here is a function that
// computes factorials recursively:

const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));
const numbers = [1,2,3,4,5];
numbers.map(number => console.log(factorial(number)));
