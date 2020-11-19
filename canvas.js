console.log("canvas");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const offset = 20;
const x = 0;
const y = 0;

let i = x + 18 * offset;
let j = y + 5;
let w = 40;

canvas.addEventListener("mousedown", (e) => {
  console.log("x: ", e.offsetX, " y: ", e.offsetY);
});

// drawing minesweepers
// ctx.fillStyle = "gray";
// ctx.strokeRect(i - 2, j - 2, 403, 403);
// ctx.clearRect(i - 1, j - 1, 401, 401);
// 1st line
// ctx.fillRect(i, j, w - 1, w - 1);
// ctx.fillRect(i + w, j, w - 1, w - 1);
// ctx.fillRect(i + 2 * w, j, w - 1, w - 1);
// ctx.fillRect(i + 3 * w, j, w - 1, w - 1);
// ctx.fillRect(i + 4 * w, j, w - 1, w - 1);
// ctx.fillRect(i + 5 * w, j, w - 1, w - 1);
// ctx.fillRect(i + 6 * w, j, w - 1, w - 1);
// ctx.fillRect(i + 7 * w, j, w - 1, w - 1);
// ctx.fillRect(i + 8 * w, j, w - 1, w - 1);
// ctx.fillRect(i + 9 * w, j, w - 1, w - 1);

// drawing rectangles
// black
ctx.fillStyle = "black";
ctx.fillRect(x, y, 100, 100);
// gray
// ctx.fillStyle = "gray";
// ctx.fillRect(x + 2 * offset, y + 2 * offset, 100, 100);
// // white
// ctx.fillStroke = "gray";
// ctx.clearRect(x + 4 * offset, y + 4 * offset, 100, 100);
// ctx.strokeRect(x + 4 * offset, y + 4 * offset, 100, 100);
// // black & white
// ctx.fillStyle = "black";
// ctx.fillRect(y + 10 * offset, x, 100, 100);
// ctx.clearRect(y + 10 * offset + offset, x + offset, 60, 60);
// ctx.strokeRect(y + 10 * offset + 1.5 * offset, x + 1.5 * offset, 40, 40);

// // triangles
// ctx.beginPath();
// ctx.moveTo(x, y + 10 * offset);
// ctx.lineTo(x, y + 16 * offset);
// ctx.lineTo(x + 5 * offset, y + 16 * offset);
// ctx.fill();
// ctx.moveTo(x + 8 * offset, y + 10 * offset);
// ctx.lineTo(x + 8 * offset, y + 16 * offset);
// ctx.lineTo(x + 13 * offset, y + 16 * offset);
// ctx.lineTo(x + 8 * offset, y + 10 * offset);
// ctx.stroke();
// ctx.closePath();

// // arcs (circles)
// ctx.beginPath();
// ctx.arc(
//   x + 3 * offset,
//   y + 18 * offset + 3 * offset,
//   2 * offset,
//   0,
//   Math.PI * 2
// );
// ctx.stroke();
// ctx.closePath();
// ctx.beginPath();
// ctx.arc(
//   x + 8 * offset,
//   y + 18 * offset + 3 * offset,
//   2 * offset,
//   0,
//   Math.PI * 2
// );
// ctx.fill();
// ctx.closePath();

// // shape + text inside
// ctx.beginPath();
// ctx.arc(x + 125, y + 25 * offset + 48, 1.6 * offset, 0, Math.PI * 2);
// ctx.arc(x + 125, y + 25 * offset + 48, 1.2 * offset, 0, Math.PI * 2);
// ctx.fill("evenodd");
// ctx.closePath();

// // text
// ctx.font = "35px serif";
// ctx.textAlign = "center";
// ctx.textBaseline = "middle";
// ctx.fillText("M", x + 125, y + 25 * offset + 50);
