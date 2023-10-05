// In this example, makeCounter returns a closure that "closes over"
// the count variable. The closure retains access to the count variable 
// even though makeCounter has finished executing. Each time you call counter(), 
// it accesses and updates the count variable from its enclosing environment, 
// resulting in a counter that increments with each call.
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter = makeCounter();

console.log(counter()); // Output: 0
console.log(counter()); // Output: 1
