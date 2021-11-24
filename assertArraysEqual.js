const eqArrays = function(arrX, arrY) {
  if (arrX.toString() === arrY.toString()) {
    return true
  } else {
    return false
  }
}

const assertArraysEqual = function(arrays, expected) {
  if (arrays === expected) {
    console.log(`Would you look at that?! ${arrays} === ${expected}, which can only mean these Arrays are the same!`);
  } else {
    console.log(`Shoot dang heck. Looks like ${arrays} !== ${expected}, back to the drawing board`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);