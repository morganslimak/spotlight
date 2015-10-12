$(document).ready(function() {

var canvas = document.getElementById("overlay");
var ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var x;
var y;

canvas.addEventListener("mousemove", function(event) {
	x = event.clientX;
	y = event.clientY;
})

var render = setInterval(function() {
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.globalCompositeOperation = "source-out";
ctx.beginPath();
ctx.arc(x,y,100,0,2*Math.PI);
ctx.fillStyle = "rgba(255,0,0,1)";
ctx.fill();
ctx.fillStyle = "rgba(0,0,0,.7)";
ctx.fillRect(0,0,canvas.width, canvas.height);
}, 100);

})