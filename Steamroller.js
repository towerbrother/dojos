/*

Flatten a nested array. You must account for varying levels of nesting.

*/

function steamrollArray(arr) {

    let retArray = [];

    
    let flatten = argument => {
        //if argument is not an array then it is a single value that can be pushed into retArray
        if(!Array.isArray(argument)) {
            retArray.push(argument);
        } else {
            //it means that argument is an array (and it's elements may be an array themselves)
            for(let e in argument){
                flatten(argument[e])
            }
        }
    };
    
    //call the function for each element of arr
    arr.forEach(flatten);

    //return the array
    return retArray;
}
  
steamrollArray([1,[2],[3,[[4]]]]); //return [1, 2, 3, 4]