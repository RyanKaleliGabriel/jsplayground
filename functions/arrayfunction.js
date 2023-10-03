// When you pass an array as a parameter,
// if the function changes any of the array's
// values, that change is visible outside the function,
// as shown in the following example:

const myFunc = (theArr) => (theArr[0] = 30);
const arr = [45];
console.log(arr[0]);
myFunc(arr);
console.log(arr[0]);
