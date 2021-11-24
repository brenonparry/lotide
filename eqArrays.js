const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// const eqArrays = function(arrX, arrY) {
//   if (arrX.toString() === arrY.toString()) {
//     return true
//   } else {
//     return false
//   }
// }

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

// assertEqual(eqArrays([1, 2, 3], [1, 2, "4"]), true);
console.log(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]))
