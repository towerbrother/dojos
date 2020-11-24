/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/

function smallestCommons(arr) {
    
    //sort the array descending order
    arr.sort((a,b) => b - a);

    //create an array and populate it with numbers in the range (from biggest to smallest)
    let newArr = [];
    for(let i = arr[0]; i >= arr[1]; i--){
        newArr.push(i);
    }

    //check whether res is evenly divisibly by all values in the array
    let res = 0;
    let loop = 1;
    let j;

    do {
        res = newArr[0] * newArr[1] * loop;
        for (j = 2; j < newArr.length; j++) {
          if (res % newArr[j] !== 0) {
            break;
          }
        }
        loop++;
    } while (j !== newArr.length);
    
    return res;
}
  

smallestCommons([1,3]); //return 6
smallestCommons([1,5]); //return 60
smallestCommons([2,10]); //return 2520