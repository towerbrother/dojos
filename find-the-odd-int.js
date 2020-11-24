/*

Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] --> 5
[10] --> 10

*/

function findOdd(array) {
  //happy coding!
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return array[i];
    }
  }
}
