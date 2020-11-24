/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note:
Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
    
    function capitaliseFirstLetter(string) {
        let res = string.charAt(0).toUpperCase() + string.slice(1);
        return res;
    }

    let array = str.split(" ");

    //the regex starts with a capital letter
    let regex = /^[A-Z]/;

    let length = array.length;

    for(let i = 0; i < length; i++){
        if(array[i] === before){
            
            //check if the first letter of 'before' is capitalised
            if(regex.test(before.charAt(0))){
                after = capitaliseFirstLetter(after);
            }
            
            //substitute 'before' with 'after'
            array[i] = after;
        }
    }

    let res = array.join(" ");

    return res;
}
  
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//return "A quick brown fox leaped over the lazy dog"





/*
myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/