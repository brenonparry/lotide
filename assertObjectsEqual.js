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



const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // convert each object's keys to arrays and compare .length
    return false;
  }
  for (const key in object2) { // loop through keys of the specified object
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // check to see if the key value is an array in both, if so:
      if (eqArrays(object1[key], object2[key]) === false) { // call my eqArrys() to compare them
        return false;
       } 
      } else if (object1[key] !== object2[key]) { // if one or both is not an array, it iwll jump to this condition and compare them literally
        return false
      } 
    }
  return true; // checked for all false conditons, if none are found eqObjects will return 'true'
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`Mama mia! 🤌🤌🤌 ${inspect(object1)} === ${inspect(object2)}, those are some spicy objects 🍝🍝🍝`);
  } else {
    console.log(`Shoot dang heck. Looks like ${inspect(object1)} !== ${inspect(object2)}, that shit is whack`);
  }
};

console.log("\n____________________________________________________\n");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // ==> expecting TRUE
console.log("\n____________________________________________________\n");
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // ==> expecting FALSE
console.log("\n____________________________________________________\n");
const cd = { c: "1", d: ["2", 3] }; 
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // ==> expecting TRUE
console.log("\n____________________________________________________\n");
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // ==> expecting FALSE