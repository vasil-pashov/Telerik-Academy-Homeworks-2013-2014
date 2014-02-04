(function(){
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	function drawWheel(x, y){
		context.beginPath();
		context.arc(x, y, 40, 0, Math.PI * 2);
		context.fillStyle = "#90CAD7";
		context.fill();
		context.strokeStyle = "#2E798B";
		context.stroke();
	}
	drawWheel(100, 200);
	drawWheel(300, 200);
	context.beginPath();
	context.arc(180, 200, 15, 0, Math.PI * 2);
	context.strokeStyle = "#2E798B";
	context.stroke();
	context.beginPath();
	context.moveTo(100, 200);
	context.lineTo(180, 200);
	context.lineTo(290, 140);
	context.lineTo(155, 140);
	context.lineTo(100, 200);
	context.moveTo(120, 100);
	context.lineTo(160, 100);
	context.moveTo(140, 100);
	context.lineTo(180, 200);
	context.moveTo(170, 190);
	context.lineTo(158, 178);
	context.moveTo(190, 210);
	context.lineTo(202, 222);
	context.moveTo(300, 200);
	context.lineTo(280, 80);
	context.lineTo(320, 50);
	context.moveTo(280, 80);
	context.lineTo(240, 90);
	context.stroke();
	
})();