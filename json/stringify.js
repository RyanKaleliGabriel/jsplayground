//When sending data to a web server, the data has to be a string.
//Convert a JavaScript object into a string with JSON.stringify().

//When storing data, the data has to be a certain format, and regardless of 
//where you choose to store it, text is always one of the legal formats.

const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// //Retrieving Data
let text = localStorage.getItem("testJSON")
let obj =JSON.parse(text)
document.getElementById("age").innerHTML = obj.age

//The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:


const obj2 = {name: "John", age: function () {return 30;}, city: "New York"};
const myJsonEx = JSON.stringify(obj2)
console.log(myJsonEx)

//This can be omitted if you convert your functions into strings before running the JSON.stringify() function.
const obj3 = {name: "John", age: function () {return 30;}, city: "New York"};
obj3.age = obj3.age.toString();
const myJSONExamp = JSON.stringify(obj3);
console.log(myJSONExamp);