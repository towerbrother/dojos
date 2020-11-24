/*

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filterList([1,2,'a','b']) == [1,2]
filterList([1,'a','b',0,15]) == [1,0,15]

*/

function filterList(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      result.push(list[i]);
    }
  }
  return result;
}
