function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}

console.log(countTruthy([0, null, undefined, "", 2, 3]));
