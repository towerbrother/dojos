// global variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasHeight = 402;
const canvasWidth = 402;
const resolution = 40;
canvas.height = canvasHeight;
canvas.width = canvasWidth;
const cols = Math.floor(canvasWidth / resolution);
const rows = Math.floor(canvasHeight / resolution);
let grid;

// difficulty level
const easy = 0.1;
const medium = 0.2;
const hard = 0.4;

function drawMine(x, y) {
  ctx.font = "30px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000000";
  ctx.fillText("M", x, y);
}

function drawNumber(n, x, y) {
  ctx.font = "30px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000000";
  ctx.fillText(n, x, y);
}

function makeGrid() {
  let array2D = new Array(cols);
  for (let i = 0; i < cols; i++) {
    array2D[i] = new Array(rows);
  }
  return array2D;
}

function populateGrid(array2D, level) {
  // default
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      array2D[i][j] = {
        x: i * resolution,
        y: j * resolution,
        mine: false,
        neighboursCount: null,
        revealed: false,
      };
    }
  }

  // mines
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      array2D[i][j].mine = Math.random() < level;
    }
  }

  // number of neighbour mines
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let neighbours = countNeighbours(array2D, i, j);
      if (!array2D[i][j].mine) array2D[i][j].neighboursCount = neighbours;
    }
  }

  return array2D;
}

function countNeighbours(grid, x, y) {
  if (grid[x][y].mine) return null;
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = x + i;
      let row = y + j;
      if (col > -1 && col < cols && row > -1 && row < rows) {
        if (grid[col][row].mine) sum++;
      }
    }
  }
  return sum;
}

function renderGrid(grid) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      ctx.strokeRect(x, y, resolution, resolution);
      if (grid[i][j].revealed) {
        if (grid[i][j].mine) {
          drawMine(x + resolution * 0.5, y + resolution * 0.5);
        } else {
          ctx.fillStyle = "#cccccc";
          ctx.fillRect(x + 2, y + 2, resolution - 4, resolution - 4);
          if (grid[i][j].neighboursCount > 0) {
            drawNumber(
              grid[i][j].neighboursCount,
              x + resolution * 0.5,
              y + resolution * 0.5
            );
          }
        }
      }
    }
  }
}

function gameOver() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j].mine && grid[i][j].revealed) {
        for (let n = 0; n < cols; n++) {
          for (let m = 0; m < rows; m++) {
            grid[n][m].revealed = true;
          }
        }
      }
    }
  }
  renderGrid(grid);
}

function play(level) {
  grid = populateGrid(makeGrid(), level);
  renderGrid(grid);
  console.log(grid);
  canvas.addEventListener("mousedown", (e) => {
    cellPressed(e.offsetX, e.offsetY);
    renderGrid(grid);
    gameOver();
  });
}

function cellPressed(x, y) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].revealed =
        x > grid[i][j].x &&
        x < grid[i][j].x + resolution &&
        y > grid[i][j].y &&
        y < grid[i][j].y + resolution;
      // if (grid[i][j].countNeighbours === 0) floodFill(grid[i][j]);
    }
  }
}

// function floodFill(cell) {
//   for (let i = -1; i < 2; i++) {
//     for (let j = -1; j < 2; j++) {
//       let col = cell.x + i;
//       let row = cell.y + j;
//       if (col > -1 && col < cols && row > -1 && row < rows) {
//         if (!grid[col][row].revealed && grid[col][row].countNeighbours === 0) {
//           floodFill(row, col);
//         }
//       }
//     }
//   }
// }

play(easy);
