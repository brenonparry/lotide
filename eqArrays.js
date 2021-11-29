const assertEqual = require('./assertEqual');

const eqArrays = function(arrX, arrY) {
  if (arrX.length === arrY.length) { // compare .lengths
    for (let i = 0; i < arrX.length; i++) { // loop through on of the arrays
      if (arrX[i] !== arrY[i]) { // compare to a falsy 
        return false
      } 
    }
    return true
  }
  return false
}



// _______________________ My original code didnt account for some conditions so a mentor helped me work it out _______________
// const eqArrays = function(arrX, arrY) {
//   if (arrX.toString() === arrY.toString()) {
//     return true
//   } else {
//     return false
//   }
// }

module.exports = eqArrays;