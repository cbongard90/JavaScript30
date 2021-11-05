const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

// ensures no drawing is done during hover
let isDrawing = false;

// STarting coordinates
let lastX = 0;
let lastY = 0;

// For creative drawing
let hue = 0;
let direction = true;

const draw = (event) => {
  if (!isDrawing) return; // stop the function when not clicking
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();

  // Starting Point
  ctx.moveTo(lastX, lastY);
  // Ending Point
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();

  [lastX, lastY] = [event.offsetX, event.offsetY];
  hue++;
  hue >= 360 ? (hue = 0) : hue;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
};

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
