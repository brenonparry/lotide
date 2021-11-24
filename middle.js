const testArr = [1, 2, 3, 4, 5, 6, 7]

const middle = function(array) {
  let index = Math.floor((testArr.length / 2))
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

console.log(middle(testArr));




// const index = Math.floor((testArr.length / 2))
// console.log(testArr[num - 1]);
// console.log(testArr[num]);

// if (array.length % 2 === 0) {
// newArr.push(array[num - 1]);
// newArr.push(array[num]);
// }
// else



// console.log(Math.floor((testArr.length / 2)))
// console.log(num);
