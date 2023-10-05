//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

function multiply(mutliplier, ...theArgs){
    return theArgs.map((x)=> mutliplier*x)
}

const arr = multiply(5,2,3)
console.log(arr)