/*

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above.
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.

*/

function telephoneCheck(str) {
  //remove all char that are non-digit
  let number = str.split(/\D/).join("");
  let length = number.length;

  if (length !== 10 && length !== 11) {
    return false;
  }

  //I know it is 10 or 11 digits
  //now I need to check if the first number is 1 when it is 11
  if (length === 11 && number[0] !== "1") {
    return false;
  }

  //I need to check whether it is in a proper format as input
  let format = str.split(/\d|\s/).join("");
  return format === "()-" || format === "" || format === "--" ? true : false;
}

telephoneCheck("555-555-5555"); //true
telephoneCheck("1 555-555-5555"); //true
telephoneCheck("123**&!!asdf#"); //false
telephoneCheck("2 (757) 622-7382"); //false
telephoneCheck("555)-555-5555"); //false
telephoneCheck("1(555)555-5555"); //true
