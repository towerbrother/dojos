/*

Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

*/


function fearNotLetter(str){

    let length = str.length;

    for(let i = 1; i < length; i++){

        //if the letter at index 'i' is different from the letter that should have been at index '0 + i'
        if(str.charCodeAt(i) !== (str.charCodeAt(0) + i)) {
            return String.fromCharCode(str.charCodeAt(i) - 1);
        }
    }

    return undefined;
}
  
fearNotLetter("abce"); //return "d"
fearNotLetter("abcdefghjklmno"); //return "i"
fearNotLetter("stvwx"); //return "u"