// Variables defined inside a function cannot
//  be accessed from anywhere outside the function,
//  because the variable is defined only in the scope
//  of the function. However, a function can access all
//   variables and functions defined inside the scope in
//    which it is defined.

// In other words, a function defined in the global scope can
// access all variables defined in the global scope. A function
// defined inside another function can also access all variables
// defined in its parent function, and any other variables to
// which the parent function has access.

const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
const mulitply = () => num1 * num2;
console.log(mulitply());

// A nested function example
const getScore = () => {
    const num1 = 2;
    const num6 = 3;
    const add = () => `${name} scored ${num1+num6}`;
    return add();
} 
console.log(getScore())

