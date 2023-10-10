//setTimeout allows us to run a function once after the interval of time.

// function sayHi(phrase, who){
//     console.log(phrase +" "+ who)
// }
// setTimeout(sayHi, 2000, "Hello", "John");

//cleartimeout


function myFunction() {
    return console.log("This function is executed after a 3 second delay")
}

const timeoutId = setTimeout(myFunction, 3000)
