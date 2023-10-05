//Both functions B and C form closures here. So, B can access A, and C can access B.
//In addition, since C can access B which can access A, C can also access A.
//Thus, the closures can contain multiple scopes; they recursively contain the 
//scope of the functions containing it. This is called scope chaining
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + z + y);
    }
    C(3);
  }
  B(2);
}
A(1);
