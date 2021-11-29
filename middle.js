const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');





const middle = function(array) {
  let index = Math.floor((array.length / 2))
  let newArr = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      newArr.push(array[index - 1]);
      newArr.push(array[index]);
    } else {
      newArr.push(array[index]);
   } 
  }
  return newArr;
}




module.exports = middle;