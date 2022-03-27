var mouseEvent = "";
var canvas =document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var radius = 20;
var lineWidth = 3;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
  color = document.getElementById('color').value;
  lineWidth = document.getElementById("width").value;
  radius = document.getElementById("raidus").value;
  mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
  mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
  mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
  currentPosOfMouseX = e.clientX - canvas.offsetLeft;
  currentPosOfMouseY = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mousedown") {
    console.log("current pos of x & y coordnetes =")
    console.log("x = " + currentPosOfMouseX + "y = " + currentPosOfMouseY);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.arc(currentPosOfMouseX, currentPosOfMouseY, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}