//var declarations are function-scoped, which means they are only accessible within the 
//function they are declared in, or globally if declared outside any function.
var x =  "declared outside the function"

exampleFunction()


function exampleFunction()
{
    console.log(x)
}
console.log(x)