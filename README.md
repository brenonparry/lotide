# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brenonparry/lotide`

**Require it:**

`const _ = require('@brenonparry/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [3]`

## Documentation

The following functions are currently implemented:
* `countLetters(...)`: Takes in a sentence (as a string) and returns a count of each of the letters in that sentence.
* `eqArrays(...)`: Takes in two arrays as the parameters and evaluates to true if the arrays are identical, otherwise it evaluates false.
* `assertEqual(...)`: Takes in a non-array or object value: 'actual', and compares its against 'expected' to return a boolean.
* `eqObjects(...)`: Takes in two objects as the parameters and evaluates to true if the objects are identical, otherwise it evaluates false.
* `findKey(...)`: Takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(...)`: Takes in an object and the value of a desired key in the object. It will scan the values until it matched the value to the key, then return the key.
* `head(...)`: Takes in an array and returns the first element.
* `letterPositions(...)`: Takes in a sentance (as a string) and returns all the indices (zero-based positions) in the string where each character is found.
* `tail(...)`: Takes in an array and returns the last element.
* `middle(...)`: Takes in an array and returns the middle element. if the array.length is even, it will return the two most middle in a new array.
* `takeUntil(...)`: Takes in an array and callback() and will return a "slice" of the array with elements taken from the beginning. It keeps going until the callback/predicate returns a truthy value.
* `without(...)`: Takes in a source array and a itemsToRemove array. It returns a new array with only those elements from source that are not present in the itemsToRemove array.
* `map(...)`: Takes in an array and callback(), it returns a new array based on the results of the callback function.
* `countOnly(...)`: Takes in an array and an object. It will return an object containing counts of everything that the input object listed.
* `assertArrayEqual(...)`: An asertion using eqArrays().
* `assertObjectsEqual(...)`: An assertion using eqObjects().
