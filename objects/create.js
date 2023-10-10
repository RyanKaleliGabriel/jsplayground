//An object is a collection of properties, and a property is an association between a name (or key) and a value.
// A property's value can be a function, in which case the property is known as a method.

//The syntax for an object using an object initializer is
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
console.log(myHonda["engine"].cylinders);
console.log(myHonda.engine["size"]);

//Define the object type by writing a constructor function.
//Create an instance of the object with new.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const MyCar = new Car("Eagle", "Talon Tsi", 1993);
console.log(MyCar.make);

//Objects can also be created using the Object.create() method.

const Animal = {
  type:"Invetebrates",
  displayType() {
    console.log(this.type);
  }
}

const animal1 = Object.create(Animal);
animal1.displayType();
const fish =  Object.create(Animal)
fish.type = "Vetebrate"
fish.displayType();
