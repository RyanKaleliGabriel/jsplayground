//A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
function checkLength(str) {
  return new Promise((resolve, reject) => {
    if (str.length > 1) {
      resolve(str);
    } else {
      reject(new Error("String should be more than one charcter"));
    }
  });
}

function reversedString(str) {
  return checkLength(str)
    .then((str) => {
      const splitString = str.split("");
      const reversedArray = splitString.reverse();
      const joinedArray = reversedArray.join("");
      return joinedArray;
    })
    .catch((err) => {
      console.error(`Error: ${err.message}`);
      throw err;
    });
}

reversedString("The quick brown fox jumps over the lazy dog")
  .then((reversed) => {
    console.log("Reversed string: ", reversed);
  })
  .catch((err) => {
    console.error(`Error: ${err.message}`);
  });
