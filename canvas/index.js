let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
//rectangle
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 380, 280);
ctx.fillStyle = "green";
ctx.fillRect(11, 11, 378, 278);
//cricle\
let centerX = c.width / 2;
let centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
