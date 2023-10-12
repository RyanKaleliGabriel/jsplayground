// The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.
// The includes() method is case sensitive.
let text = "Hello world, welcome to the universe.";

let result = text.includes("world");
console.log(result);
// Start at position 12:
let result2 = text.includes("world", 12);
console.log(result2)