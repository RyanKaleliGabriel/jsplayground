//The filter() method is a built-in method in JavaScript that is used with arrays to
// create a new array containing elements that satisfy a specified condition.
// It doesn't modify the original array; instead,
// it returns a new array with the filtered elements.

const arr = [234, 635, 974, 13, 645, 26];
const evenNumbers = arr.filter((number) => number % 2 == 0);
console.log(evenNumbers);
