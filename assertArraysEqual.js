const eqArrays = require('./eqArrays');



const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`Would you look at that?! ${arrayOne} === ${arrayTwo}, which can only mean these Arrays are the same!`);
  } else {
    console.log(`Shoot dang heck. Looks like ${arrayOne} !== ${arrayTwo}, back to the drawing board`);
  }
};



module.exports = assertArraysEqual; 