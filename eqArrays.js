const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// const eqArrays = function(arrX, arrY) {
//   for (let x = 0; x < arrX.length; x++) {
//     for (let y = 0; y < arrY.length; y++) {
//       if (arrX[x] === arrY[y]) {
//         return true
//       } else {
//         return false
//       }
//     }
//   }
// }

const eqArrays = function(arrX, arrY) {
  if (arrX.toString() === arrY.toString()) {
    return true
  } else {
    return false
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);