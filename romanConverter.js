/*

Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.


MeDiCaL XaVIer - M=1000 D=500 C=100 L=50 X=10 V=5 I=1

*/

function convertToRoman(num) {
  //these arrays are same but expressed differently
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  const length = decimals.length;

  //we need to return a string
  let converted = "";

  //run through decimals but assign to "converted" the element at the same index but in romans
  for (let i = 0; i < length; i++) {
    while (decimals[i] <= num) {
      converted += romans[i];
      num -= decimals[i];
    }
  }

  return converted;
}

convertToRoman(36);
