const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(Object.keys(fruits));
console.log(fruits.length);

//When setting a property on a JavaScript array when the property is a valid array index and that
//index is outside the current bounds of the array,
//the engine will update the array's length property accordingly:

fruits[5] = "Mango";
console.log(Object.keys(fruits));
console.log(fruits.length);

//Decreasing the length property does, however, delete elements.
fruits.length = 2;
console.log(Object.keys(fruits));
console.log(fruits.length);
