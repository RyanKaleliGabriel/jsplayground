//async makes a function return a Promise
//await makes a function wait for a Promise
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues

async function myDisplayer() {
  var myPromise = new Promise(function (resolve) {
    let number = Math.floor(Math.random() * 1001);
    if (number % 2 != 0) {
      resolve("Odd Number :" + number);
    } else {
      resolve("Even Number :" + number);
    }
  });
  var result = await myPromise;
  console.log(result);
}
myDisplayer();
