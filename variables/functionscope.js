//A variable is a fundamental concept in computer programming and refers to a named storage location 
//in a computer's memory that holds data

//Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.
// Block scope: The scope created with a pair of curly braces (a block).

//var declarations are function-scoped, which means they are only accessible within the 
//function they are declared in, or globally if declared outside any function.

//function scope

function exampleFunction() {
    const x = "declared inside a function"
    console.log(x)
}
console.log(x)//Not defined