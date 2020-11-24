// Have the function SearchingChallenge1(str) take the str parameter being passed and find the longest substring that contains k unique characters,
// where k will be the first character from the string.
// The substring will start from the second position in the string because the first character will be the integer k.
// For example: if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"],
// but your program should return "aabba" because it is the longest substring.
// If there are multiple longest substrings, then return the first substring encountered with the longest length. k will range from 1 to 6.

// Examples
// Input: "3aabacbebebe"
// Output: cbebebe
// Input: "2aabbcbbbadef"
// Output: bbcbbb

function SearchingChallenge1(str) {
  const array = [...str];
  const k = Number(array.shift());

  let substring = [];
  let n = 1;

  let index = 0;

  let res = [];

  while (index < array.length) {
    if (substring === [] || substring.includes(array[index])) {
      substring.push(array[index]);
      index++;
      console.log("substring", substring);
    } else if (!substring.includes(array[index]) && n <= k) {
      substring.push(array[index]);
      n++;
      index++;
      console.log("substring", substring);
    } else {
      res.push(substring.join(""));
      console.log("res during", res);
      substring = [];
      n = 1;
      index--;
      console.log("substring after []", substring.length);
    }
  }

  res.push(substring.join(""));

  console.log("res final", res);

  const lengths = res.map((e) => e.length);

  return res[lengths.indexOf(Math.max(...lengths))];
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Have the function SearchingChallenge2(strArr) take the array of strings stored in strArr, which will be a 2D matrix of 0 and 1's,
// and determine how many holes, or contiguous regions of 0's, exist in the matrix.
// A contiguous region is one where there is a connected group of 0's going in one or more of four directions: up, down, left, or right.
// For example: if strArr is ["10111", "10101", "11101", "11111"], then this looks like the following matrix:

// ["10111",
//  "10101",
//  "11101",
//  "11111"]

// For the input above, your program should return 2 because there are two separate contiguous regions of 0's, which create "holes" in the matrix.
// You can assume the input will not be empty.
// Examples
// Input: ["01111", "01101", "00011", "11110"]
// Output: 3
// Input: ["1011", "0010"]
// Output: 2

function SearchingChallenge2(strArr) {
  let pos = [];

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if ([...strArr[i]][j] === "0") pos.push([j, i]);
    }
  }

  let count = 0;
  const x = 0;
  const y = 1;

  for (let i = 0; i < pos.length; i++) {
    for (let j = 0; j < pos.length; j++) {
      if (
        (pos[i][y] === pos[j][y] && pos[i][x] === pos[j][x] + 1) ||
        (pos[i][x] === pos[j][x] && pos[i][y] === pos[j][y] + 1)
      ) {
        count++;
      }
    }
  }

  return count;
}
