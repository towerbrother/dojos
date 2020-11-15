/*

Given an alphabet decryption key like the one below, create a program that can crack any message 
using the decryption key.

const alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const key = "! ) " ( £ * % & > < @ a b c d e f g h i j k l m n o";

You could also create a encryption program that will encrypt any message you give it using the key.

*/

const alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const alphabetArray = [...alphabet];
const key = '! ) " ( £ * % & > < @ a b c d e f g h i j k l m n o';
const keyArray = [...key];
const keyLength = key.length;

function decrypt(message) {
  const messageArray = [...message];
  let res = [];

  const messageLength = messageArray.length;

  for (let i = 0; i < messageLength; i++) {
    for (let j = 0; j < keyLength; j++) {
      if (messageArray[i] === keyArray[j]) {
        res.push(alphabetArray[j]);
      }
    }
  }

  console.log(res.join(""));

  return res.join("");
}

function encrypt(message) {
  const messageArray = [...message];
  let res = [];

  const messageLength = messageArray.length;

  for (let i = 0; i < messageLength; i++) {
    for (let j = 0; j < keyLength; j++) {
      if (messageArray[i] === alphabetArray[j]) {
        res.push(keyArray[j]);
      }
    }
  }

  console.log(res.join(""));

  return res.join("");
}

encrypt("ciao");
decrypt('">!d');
