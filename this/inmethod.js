//object method binding
//In an object method, this refers to the object.

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 237,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};


console.log(person.fullName())

//The call() and apply() methods are predefined JavaScript methods.
//They can both be used to call an object method with another object as argument.

const person2 = {
    firstName: "Ryan",
    lastName: "Kaleli"
}

console.log(person.fullName.call(person2))
console.log(person.fullName.apply(person2))

//With the bind() method, an object can borrow a method from another object.
const memeber = {
    firstName: "Jane",
    lastName: "Doey"
}

let fullName = person.fullName.bind(memeber)
console.log(fullName());