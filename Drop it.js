/*

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

*/

function dropElements(arr, func) {
    
    let res = [...arr];

    let loops = res.length;
    
    for(let i = 0; i < loops; i++) {
        if(func(res[0])) {
            break;
        } else {
            res.shift();
        }
    }

    return res;
}
  

dropElements([1, 2, 3], function(n) {return n < 3;}) //return [1, 2, 3]
dropElements([1, 2, 3, 4, 5, 6], function(n) {return n > 5;}) //return [5, 6]
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) //return [1, 0, 1].
  