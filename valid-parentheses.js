/*

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
")))))((((("      =>  false

Constraints
0 <= input.length <= 100

*/

function validParentheses(parens) {
  let count = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      count++;
    } else {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }

  if (count === 0) {
    return true;
  } else {
    return false;
  }
}
