/* 

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

*/

function sumFibs(num) {

    let sum = 0;
    let previous = 0;
    let current = 1;

    while(current <= num){
        if(current % 2 != 0){
            sum += current;
        }
        current += previous;
        previous = current - previous;
    }

    return sum;
}
  
sumFibs(4);


sumFibs(1); //return a number.
sumFibs(1000); //return 1785.
sumFibs(4000000); //return 4613732.
sumFibs(4); //return 5.
sumFibs(75024); //return 60696.
sumFibs(75025); //return 135721.