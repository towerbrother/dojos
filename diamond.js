/*
Given a letter, print a diamond starting with ‘A’ with the supplied letter at the widest point.
For example: print-diamond ‘C’ prints
*/

function templateNumRow(number) {
  let rowNums = [];
  for (let i = number; i > 1; i--) {
    rowNums.push(i);
  }
  for (let i = 1; i <= number; i++) {
    rowNums.push(i);
  }
  return rowNums;
}

function diamond(letter) {
  const code = letter.charCodeAt();
  console.log("code:", code);

  if (code < 65 || code > 90) return "Please enter a valid letter";

  const rebaseliner = 64;
  const number = code - rebaseliner;
  const rows = number + (number - 1);
  const templateRow = templateNumRow(number);

  let pattern = "";
  // first half
  for (let i = 1; i <= number; i++) {
    for (let j = 0; j < rows; j++) {
      pattern +=
        templateRow[j] === i ? String.fromCharCode(i + rebaseliner) : " ";
    }
  }
  // second half
  for (let i = number - 1; i >= 1; i--) {
    for (let j = 0; j < rows; j++) {
      pattern +=
        templateRow[j] === i ? String.fromCharCode(i + rebaseliner) : " ";
    }
  }

  // separate print
  for (let i = 0; i < rows * rows; i += rows) {
    console.log(pattern.slice(i, i + rows));
  }
}

diamond("H");
