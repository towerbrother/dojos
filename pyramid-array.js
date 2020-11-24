// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

const pyramid = (n) => {
  let array = [];
  if (n === 0) return array;
  for (let i = 1; i <= n; i++) {
    array.push(
      "1"
        .repeat(i)
        .split("")
        .map((e) => Number(e))
    );
  }
  return array;
};
