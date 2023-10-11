function myDisplayer(result) {
  console.log(result);
}

let evenNumbers = new Promise(function (resolve, reject) {
  var number = Math.floor(Math.random() * 1001);

  if (number % 2 == 0) {
    resolve("Even Number: " + number);
  } else {
    reject("Odd Number: " + number);
  }
});

evenNumbers.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
