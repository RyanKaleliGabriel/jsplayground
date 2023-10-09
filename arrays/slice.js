// The slice() method of Array instances returns a shallow copy 
//of a portion of an array into a new array object selected from 
//start to end (end not included) where start and end represent the 
//index of items in that array. The original array will not be modified.
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(1,5));
console.log(animals.slice(3,4));
console.log(animals.slice(2,-1));
console.log(animals.slice(-2));
