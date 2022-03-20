var mouseEvent ="";
var canvas =getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color =black;
var radius= 20px;
var lineWidth = 3px;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e)
{
  color = document.getElementById('color').value;
  lineWidth= document.getEmementById("width").value;
  radius= document.getElementById("radius").value;
  mouseevent="mousedown";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
  mouseevent="mouseup";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
  mouseevent ="mouseleave";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
  mouseevent = "mousemove";
  currentPosOfMouseX = e.clientX - canvas.offsetLeft;
  currentPosOfMouseY = e.clientY - canvas.offsetTop;
  
  if(mouseevent =="mousedown")
    {
      console.log("current pos of x & y coordnetes =")
      console.log("x = " + currentPosOfMouseX + "y = " + currentPosOfMouseY);
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.arc(currentPosOfMouseX, currentPosOfMosueY, raidus, 0, 2*Math.PI);
      ctx.stroke;
    }
}