
//THIS SOLUTION WORKS ONLY IF THERE IS A SINGLE POINT IN THE MAP

function logisticMap(width,height,xs,ys){
    
    //the array that will be returned and that need to be populated
    let array = [];

    //xs & ys length
    let numPoints = xs.length;

    //starting from the bottom left position (0,0)
    for(let k = 0; k < numPoints; k++){
        for(let i = 0; i < height; i++){
            let tempArray = [];
            for(let j = 0; j < width; j++){
                tempArray.push((Math.abs(xs[k]-j) + Math.abs(ys[k]-i)));
            }
            array.push(tempArray);
        }
    }   

    //currently still working for 1 point only
    //in case of multiple points it returns an array with numPoints*height arrays
    //one option is to slice() and splice() the array and then compare array-by-array, element-by-element and chose the lowest only
    //not sure about the implementation yet

    return array;
}

logisticMap(3,3,[0],[0]); //return [ [0,1,2], [1,2,3], [2,3,4] ]
logisticMap(4,4,[1,2],[1,3]); //return [ [2,1,2,3], [1,0,1,2], [2,1,1,2], [2,1,0,1] ]
