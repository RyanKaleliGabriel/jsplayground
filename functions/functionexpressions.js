// a function can be anonymous; 
// it does not have to have a name. 
// For example, the function square 
// could have been defined as:

const square = function (number) {
    return number * number;
};
console.log(square(4));

function map(f, a) {
    const result = new Array(a.length);
    for(let i=0; i< a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const cube = function(x) {
    return Math.pow(x, 3);
}

const numbers = [0,1,2,5,10];
console.log(map(cube, numbers));