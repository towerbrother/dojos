/*

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is ...
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

*/

function whatIsInAName(collection, source) {
    
    //you get the keys of the object
    let sourcePropertyNames = Object.getOwnPropertyNames(source);
    //to be used in the for loop
    let sourcePropertyLength = sourcePropertyNames.length;

    //filter return an array that is at least the same size as the original (usually smaller)
    return collection.filter(function(collection) {
        for(let i = 0; i < sourcePropertyLength; i++) {
            if( //check if the property at index "i" exist in collection
                !collection.hasOwnProperty(sourcePropertyNames[i])
                //OR - because we are checking the negative
                ||
                //check if the value of the property at index "i" in collection is the same as in source
                collection[sourcePropertyNames[i]] !== source[sourcePropertyNames[i]] ) {
                    
                    //filter will not include this instance in the final array
                    return false;
            }
        }

        //everything left will be included
        return true;

    });

}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//return [{ first: "Tybalt", last: "Capulet" }]

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 });
//return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]