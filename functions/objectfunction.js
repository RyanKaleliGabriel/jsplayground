// When you pass an object as a parameter,
// if the function changes the object's properties,
// that change is visible outside the function, as
// shown in the following example

const myFunc = (theObject) => (theObject.make = "Toyota");
const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};
console.log(mycar.make);
console.log(myFunc(mycar));
