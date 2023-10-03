// a function can be anonymous;
// it does not have to have a name.
// For example, the function square
// could have been defined as:

const square = (number) => number * number;
console.log(square(4));

// The following example shows a map function
// that should receive a function as first argument
//  and an array as second argument:

// In the following code, the function receives a function
// defined by a function expression and executes it for every
// element of the array received as a second argument:

const map = (f, a) => a.map((item) => f(item));
const cube = (x) => Math.pow(x, 3);
const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers));
