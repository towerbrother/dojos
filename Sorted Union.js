/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique() {
    
    let res = [...arguments[0]];

    for(let i = 1; i < arguments.length; i++){
        let arrLength = arguments[i].length;
        for(let j = 0; j < arrLength; j++){
            if(!res.includes(arguments[i][j])){
                res.push(arguments[i][j]);
            }
        }
    }
    
    return res;
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //return [1, 3, 2, 5, 4]
uniteUnique([1, 2, 3], [5, 2, 1]); //return [1, 2, 3, 5]