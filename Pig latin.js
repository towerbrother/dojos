/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.

*/

function translatePigLatin(str) {

    const CONSONANT = /^[^aeiou]+/i;

    let startCons = str.match(CONSONANT);

    if(startCons !== null) {
        return str.replace(CONSONANT, "").concat(startCons).concat("ay");
    } else {
        return str.concat("way");
    }
}
  
translatePigLatin("california") //return "aliforniacay"
  