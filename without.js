const eqArrays = function(arrX, arrY) {
  if (arrX.length === arrY.length) {
    for (let i = 0; i < arrX.length; i++) {
      if (arrX[i] !== arrY[i]) {
        return false
      } 
    }
    return true
  }
  return false
}

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`Would you look at that?! ${arrayOne} === ${arrayTwo}, which can only mean these Arrays are the same!`);
  } else {
    console.log(`Shoot dang heck. Looks like ${arrayOne} !== ${arrayTwo}, back to the drawing board`);
  }
};

const words = ["hello", "world", "lighthouse"];

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
}

console.log(without(words, ["lighthouse"]));
assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"]), true);

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(words)

module.exports = without;