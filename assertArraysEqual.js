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

assertArraysEqual([1, 2, 4], [1, 2, 3]);