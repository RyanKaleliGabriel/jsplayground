const myObj = new Object();
myObj.a = 5;
myObj.b = 6;


delete myObj.a;
console.log("a" in myObj);