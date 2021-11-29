
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); 

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); 

const cd = { c: "1", d: ["2", 3] }; 
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

// Had help from @ocnerol - He walked me through my logic and was able to answer questions about specific syntax 


// MY PSUDO CODE:

// 1. Convert the objects to arrays usting Object.keys, then compare .lengths
    // if the lengths are the same, return true, otherwise return false.

// 2. Now check to see if the values of the keys are the same - unsure of how to tackle this step
    // Loop throught the Key value pairs 
    // maybe use a simeple if statement to see if the values are the same.
    // if the values match, return true, otherwise return false.

// 3. If the object's keys are arrays, use the eqArrays function
    // Not 100% sure of how to call this, will have to fuck around to see whats what.
   // if (object1[key] is an array Array.isArray(object1[key])

// 4. If the objects keys are objects themselves, call the eqObjects on itself? Will have to try


// By looping through the keys in object1, I can compare them to the keys in object2
// if the object1[key] === object2[key] // Didnt end up doing this step yet!
