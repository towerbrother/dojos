/*

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note:
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) 
in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

*/

function palindrome(str) {
  //get string to lowercase & remove all non-alphanumeric characters
  let regex = /[\W\s^_]/g;
  let newStr = str.toLowerCase().replace(regex, "");

  //string to array and reverse to string
  let strRev = [...newStr].reverse().join("");

  //we have got two strings to compare
  return newStr === strRev ? true : false;
}

palindrome("eye"); //true
