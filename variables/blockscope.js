//Blocks only scope let and const declarations, but not var declarations.
//let declarations are block-scoped, which means they are only accessible within the block
// (e.g., within curly braces) where they are declared.
//let variables cannot be re-declared within the same scope.

function example(a){
    let result;
    if(a%2 == 0){
       result = "even"
    }
    return console.log(result)
}

example(436)