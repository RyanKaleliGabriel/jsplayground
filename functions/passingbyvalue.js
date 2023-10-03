// parameters passed to functions are typically treated as "passed by value."
// This means that when you call a function and
// pass a parameter to it, you are essentially passing a copy
// of the original value, not the original value itself.
// This copy is a local variable within the function, and any
// changes made to this copy do not affect the original value
// outside of the function.

const square = (number) => number * number;
const value = 5;
console.log(square(value));
