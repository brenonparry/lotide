const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  const theCount = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  string = string.replace(/ /g, '').toLowerCase();
  for (const letter of string) {
      theCount[letter] += 1
  } for (const keys of Object.keys(theCount)) {
    if (theCount[keys] === 0) {
      delete theCount[keys];
    } 
  }
  return theCount
}

console.log(countLetters("Hey you over there"));
console.log(countLetters("These pretzles are making me thirsty"))

module.exports = countLetters;