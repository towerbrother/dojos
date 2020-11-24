/*

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

function addTogether() {

    //check arguments length
    if(arguments.length === 2) {
 
        //check whether arguments are != integers
        for(let i = 0; i < 2; i++) {
            if(typeof arguments[i] !== "number") {
                return undefined;
            }
        }
    
        //sum the two numbers
        return arguments[0] + arguments[1];
    
    } else if(arguments.length === 1) {

        //store the first argument passed into a variable
        let a = arguments[0];

        //check whether argument is != integers
        if(typeof a !== "number") {
            return undefined;
        }

        //return a function that ask for another argument
        return function addToFirstArg(b) {
            
            //check whether argument is != integers
            if(typeof b !== "number") {
                return undefined;
            }

            return a + b;

        }  

    } else {

        return undefined;
    
    } 

}


addTogether(2,3); //return 5

addTogether(2)(3); //return 5

addTogether(2)("ciao"); //return undefined

addTogether("ciao")(3); //return undefined