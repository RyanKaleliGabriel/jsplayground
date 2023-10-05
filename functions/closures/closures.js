// A closure is typically a function, but it can also be another type of expression that has free variables.
// Free variables are variables that are not defined within the function but are used or referenced inside it.
//These variables are "free" in the sense that they are not local to the function but come from the surrounding scope.

function addSquares(a, b) {
  const square = (x) => x * x;
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41
