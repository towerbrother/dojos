/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

function duplicateEncode(word) {
  let array = word.toLowerCase().split("");
  let result = [];

  for (let i = 0; i < word.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (word.toLowerCase()[i] === array[j]) {
        count++;
      }
    }
    count === 1 ? result.push("(") : result.push(")");
  }
  return result.join("");
}
