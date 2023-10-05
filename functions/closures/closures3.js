// Since the inner function forms a closure, you can call
// the outer function and specify arguments for both the
// outer and inner function:

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside
}

// const fnInside = outside(3);
// console.log(fnInside())
console.log(outside(3)(5))