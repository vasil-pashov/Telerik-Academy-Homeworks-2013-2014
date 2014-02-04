(function (){
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	//context.arc(canvas.width / 2, canvas.height / 2, 20, 0, 2 * Math.PI, false);
	context.stroke();
	function drawOval(x, y, r1, startAngle, endAngle, rotationAngleDegrees, scaleValX, scaleValY, color){
		var rotationAngleRadians = rotationAngleDegrees * Math.PI / 180;
		context.save();
		context.translate(x, y);
		context.rotate(rotationAngleRadians);
		context.scale(scaleValX, scaleValY);
		context.beginPath();
		context.arc(0, 0, r1/2, startAngle, endAngle);
		context.restore();
		context.fillStyle = color;
		context.fill();
		context.stroke();
	}
	function drawCylinder(x, y, width, height, color){
		context.fillStyle = color;
		context.strokeStyle = "#000000";
		context.lineWidth   = 2;
		context.fillRect(x, y, width, height);
		context.strokeRect(x - 1, y - 1 , width + 2, height + 2);
		drawOval(x + width / 2, y, (width + 2) / 2, 0, Math.PI * 2, 0, 2, 0.7, "#396693");
		drawOval(x + width / 2, y + height, (width + 2) / 2, 0, Math.PI, 0, 2, 0.7, "#396693");
	}
	//drawOval(100, 100, 50, 0, Math.PI * 2, 30, "#00FF00");
	function drawEye(x, y){
		drawOval(x, y, 10, 0, Math.PI * 2, 0, 2, 1, "#90CAD7");
		drawOval(x - 5, y, 3, 0, Math.PI * 2, 0, 1, 2, "#000000");
	}
	function drawFace(x, y, radius){
		context.arc(x,y,radius, 0, Math.PI * 360);
		context.fillStyle = "#90CAD7";
		context.fill();
		context.stroke();
		drawOval(x - 10, y + 25, 15, 0, Math.PI * 2, 5, 2.5, 0.8, "#90CAD7");
		context.beginPath();
		context.moveTo(x - 5, y - 20);
		context.lineTo(x - 17, y + 5);
		context.lineTo(x - 5, y + 5)
		context.stroke();
		drawEye(x - 25, y - 22);
		drawEye(x + 10, y - 22);
		drawOval(x, y - radius + 5, 60, 0, Math.PI * 2, 0, 2, 0.3, "#396693");
		drawCylinder(x - 35, y - radius * 2 - 16, radius + 20, 60, "#396693");
		
	}
	drawFace(200, 200, 50);
})();