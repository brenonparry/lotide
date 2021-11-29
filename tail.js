const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let tail;
  for (let i = 0; i <= arr.length; i++) {
    tail = arr[i - 1];
  };
  return tail;
};

module.exports = tail;