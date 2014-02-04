(function(){
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	function drawWindow(x, y, width, height){
		context.beginPath();
		context.fillStyle = "black";
		context.rect(x, y, width, height);
		context.fill();
		context.rect(x + width + 2, y, width, height);
		context.fill();
		context.rect(x, y + height + 2, width, height);
		context.fill();
		context.rect(x + width + 2, y + height + 2, width, height);
		context.fill();		
	}
	context.fillStyle = "#975B5B";
	context.rect(200, 200, 290, 190);
	context.fill();
	context.stroke();
	drawWindow(220, 230, 55, 27);
	drawWindow(365, 230, 55, 27);
	drawWindow(365, 300, 55, 27);
	context.beginPath();
	context.rect(230, 319, 80, 70);
	context.stroke();
	context.save();
	context.scale(2, 1);
	context.fillStyle = "#975B5B";
	context.arc(135, 320, 20, Math.PI, 0);
	context.stroke();
	context.fill();
	context.restore();
	context.beginPath();
	context.moveTo(270, 300);
	context.lineTo(270, 390);
	context.stroke();
	context.beginPath();
	context.arc(260, 370, 5, 0,  Math.PI * 2);
	context.stroke();
	context.beginPath();
	context.arc(280, 370, 5, 0,  Math.PI * 2);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#975B5B";
	context.moveTo(200, 200);
	context.lineTo(345, 90);
	context.lineTo(490, 200);
	context.lineTo(200, 200);
	context.stroke();
	context.fill();
	context.beginPath();
	context.save();
	context.scale(2, 1);
	context.fillStyle = "#975B5B";
	context.arc(220, 100, 7, Math.PI, 0);
	context.stroke();
	context.fill();	
	context.restore();
	context.beginPath();
	context.fillStyle = "#975B5B";
	context.moveTo(426, 100);	
	context.lineTo(426, 180);	
	context.lineTo(454, 180);
	context.lineTo(454, 100);
	context.lineTo(426, 100);
	context.lineTo(426, 100);
	
	context.stroke();
	context.fill();
	
	
})();