//A getter is a function associated with a property that gets the value of a specific property.
//A setter is a function associated with a property that sets the value of a specific property.

const myObj = {
  a: 7,
  get b() {
    return this.a * 7;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(myObj.a);
console.log(myObj.b);
myObj.c = 50;
console.log(myObj.a)
