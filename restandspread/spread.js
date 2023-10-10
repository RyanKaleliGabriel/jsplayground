//The spread operator is used to spread elements of an iterable (e.g., arrays, strings) 
//into a new array or object.
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

function sum(a,b,c){
    return a+b+c
}
const result = sum(...arr1, ...arr2)
console.log(result)
console.log(Math.max(...arr1,...arr2))
console.log(...arr1,...arr2)