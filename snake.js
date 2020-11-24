const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
document.addEventListener("keydown", keyPush);
setInterval(game, 1000 / 15);

canvas.height = 400;
canvas.width = 400;
gs = tc = 20; // grid size / tile count
ax = ay = 15; // apple
px = py = 10; // player
xv = yv = 0; // velocity
trail = []; // keep track of previous positions
tail = 5; // min length snake

function keyPush(e) {
  switch (e.keyCode) {
    case 37:
      xv = -1;
      yv = 0;
      break;
    case 38:
      xv = 0;
      yv = -1;
      break;
    case 39:
      xv = 1;
      yv = 0;
      break;
    case 40:
      xv = 0;
      yv = 1;
      break;
  }
}

function game() {
  px += xv;
  py += yv;

  // across edges
  if (px < 0) px = tc - 1;
  if (px > tc - 1) px = 0;
  if (py < 0) py = tc - 1;
  if (py > tc - 1) py = 0;

  // black board
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // snake
  ctx.fillStyle = "yellow";
  for (let i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs, gs);
    if (trail[i].x === px && trail[i].y === py) {
      tail = 5;
    }
  }
  trail.push({ x: px, y: py });
  while (trail.length > tail) {
    trail.shift();
  }

  // eat apple
  if (ax === px && ay === py) {
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(ax * gs, ay * gs, gs, gs);
}
