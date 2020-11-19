/*

Problem Description
This Kata is about calculating the next generation of Conway’s game of life, given any starting position. 
See http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life for background.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, 
the grid is finite, and no life can exist off the edges. When calcuating the next generation of the grid, follow these rules:

   1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
   2. Any live cell with more than three live neighbours dies, as if by overcrowding.
   3. Any live cell with two or three live neighbours lives on to the next generation.
   4. Any dead cell with exactly three live neighbours becomes a live cell.

You should write a program that can accept an arbitrary grid of cells, and will output a similar grid showing the next generation.

Clues
The input starting position could be a text file that looks like this:

Generation 1:
4 8
........
....*...
...**...
........
And the output could look like this:

Generation 2:
4 8
........
...**...
...**...
........

Front End
Make a beautiful IHM to render grid of any size in one page.

*/

const canvasWidth = 700;
const canvasHeight = 700;
const resolution = 5;
const cols = canvasWidth / resolution;
const rows = canvasHeight / resolution;
let grid = populateGrid(makeGrid());

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

function renderGrid(grid) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = canvasHeight;
  canvas.width = canvasWidth;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] === 1) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(x, y, resolution - 1, resolution - 1);
      }
    }
  }
}

function countNeighbours(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

function nextGen(grid) {
  let next = grid.map((arr) => [...arr]);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let neighbours = countNeighbours(grid, i, j);
      let state = grid[i][j];
      if (state === 0 && neighbours === 3) {
        next[i][j] = 1;
      } else if (state === 1 && (neighbours < 2 || neighbours > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }
  return next;
}

function gameOfLife() {
  grid = nextGen(grid);
  renderGrid(grid);
  requestAnimationFrame(gameOfLife);
}

requestAnimationFrame(gameOfLife);
