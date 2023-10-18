//When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.

const data = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(data);
console.log(obj);
console.log(obj.city);

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const Myarr = JSON.parse(text);
console.log(Myarr);
console.log(Myarr[2]);

//Dates are not allowed in JSON
//If you need to include a date, write it as a string.
//You can convert it back into a date object later

const str = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj2 = JSON.parse(str);
const date = new Date(obj2.birth);
const bdate = date.getFullYear();
const currYear = new Date();
const now = currYear.getFullYear();
const years = now - bdate;
console.log(obj2.name + " is " + years + " years old. ");

//or

const obj3 = JSON.parse(str, function (key, value) {
  if (key == "birth") {
    const dob = value;
    return new Date(dob);
  } else {
    return value;
  }
});

console.log(obj3.name + " was born in " + obj3.birth.getFullYear());
