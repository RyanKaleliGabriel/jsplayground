//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
//The first arguement will be the multiplier

function multiply(mutliplier, ...theArgs){
    return theArgs.map((x)=> mutliplier*x)
}

const arr = multiply(5,2,3)
console.log(arr)





function args(...theargs){
    return theargs.map((arg)=>arg*3)
}
const mul = args(1,5,2,53,532,5,2,86,8)
console.log(mul)