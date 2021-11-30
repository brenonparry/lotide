
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

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4])



const words = ["These", "Pretzles", "Are", "Making", "Me", "Thirsty"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

console.log(results1);

assertArraysEqual(results1, [ 'T', 'P', 'A', 'M', 'M', 'T' ]);

module.exports = map;