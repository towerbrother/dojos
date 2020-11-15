/*

#1 build canvas
#2 set cells - object (x, y, bomb/number/null, hidden/showing)
#3 set the bombs
#4 populate numbers - based on bombs position
#5 addEventListener "click" to show

*/

const canvasWidth = 400;
const canvasHeight = 400;
const resolution = 40;
const cols = canvasWidth / resolution;
const rows = canvasHeight / resolution;
let grid = makeGrid();

function makeGrid() {
  let array = new Array(cols);
  for (let i = 0; i < cols; i++) {
    array[i] = new Array(rows);
  }
  return array;
}

function populateGrid(grid) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.round(Math.random());
    }
  }
  return grid;
}
