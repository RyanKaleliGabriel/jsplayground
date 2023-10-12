//A JavaScript Set is a collection of unique values.
//you can also use delete(), has()
const letters =  new Set()

letters.add("a")
letters.add("b")
letters.add("c")

//The forEach() method invokes (calls) a function for each Set element:
let text = " "
letters.forEach((value) =>{
   console.log(Math.floor(Math.random()*1001) +": " + text + value)
});

//The values() method returns a new iterator object containing all the values in a Set:
console.log(letters.values());

letters.add("1");
console.log(letters.values())

