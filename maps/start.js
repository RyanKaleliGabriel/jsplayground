// Maps are a built-in data structure introduced in ECMAScript 6 (ES6) and are
// specifically designed for storing key-value pairs.
// Map keys can be of any data type, including objects and functions, whereas 
//object keys are limited to strings and symbols.
// Maps maintain the order of keys, meaning that the order in which key-value 
//pairs are added is preserved when iterating through the map.

//new Map()	Creates a new Map
const fruits = new Map()

// You can add elements to a Map with the set() method:
// The set() method can also be used to change existing Map values:
fruits.set("apples", 500)
fruits.set("bananas", 300)
fruits.set("oranges", 200)

console.log(fruits)

//The get() method gets the value of a key in a Map:
console.log(fruits.get("apples"));


//The size property returns the number of elements in a Map:
console.log(fruits.size)

//The delete() method removes a Map element:
fruits.delete("apples")
console.log(fruits)

//The has() method returns true if a key exists in a Map
console.log(fruits.has("apple"))

//The forEach() method calls a function for each key/value pair in a Map:
let text = ""
fruits.forEach(function(value, key){
    console.log(text += key + ' = ' + value) ;
});

//The entries() method returns an iterator object with the [key, values] in a Map:
let text2 = ""
for(const x of fruits.entries()) {
    console.log(text += x);
}
