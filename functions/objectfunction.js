// When you pass an object as a parameter, 
// if the function changes the object's properties, 
// that change is visible outside the function, as 
// shown in the following example

function myFunc(theObject){
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: 'Accord',
    year: 1998
}


myFunc(mycar);
console.log(mycar.make)