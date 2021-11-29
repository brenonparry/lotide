const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("These pretzles are making me thirsty", "These pretzles are making me thirsty");
// assertEqual(42, 54);
// assertEqual([1, 2, 3, 4], [1, 2, 3, 4]);
// assertEqual("Mulva", "Doloris");

module.exports = assertEqual;