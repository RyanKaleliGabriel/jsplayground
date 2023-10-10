// Array example
//The spread operator is used to spread elements of an iterable (e.g., arrays, strings) 
//into a new array or object.
let arr = [1,2,3]
let arrCopy = [...arr]
console.log(arrCopy)
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));
console.log(arrCopy === arr)
arr.push(4)
console.log(arrCopy)
console.log(arr)


//object example

let obj = {a:1, b:2, c:3}
let objCopy = {...obj}
console.log(JSON.stringify(obj) === JSON.stringify(objCopy))
console.log(obj === objCopy)
obj.d = 4;
console.log(JSON.stringify(obj))
console.log(JSON.stringify(objCopy))

//This way of copying an object is much shorter than let objCopy = Object.assign({}, obj) 
//or for an array let arrCopy = Object.assign([], arr) so we prefer to use it whenever we can.
