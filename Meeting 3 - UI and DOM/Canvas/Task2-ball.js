(function(){
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	function Ball(){
		x: 0;
		y: 0;
		radius: 0;
		speedX: 0;
		speedY: 0;
	}
	var ball = new Ball();
	ball.radius = 10;
	ball.speedX = 1;
	ball.speedY = 1;
	ball.x = ball.radius;
	ball.y = ball.radius;
	function moveBall(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.beginPath();
		context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
		context.stroke();
		ball.x += ball.speedX;
		ball.y += ball.speedY;
		if(ball.y - ball.radius === 0 || ball.y + ball.radius === canvas.height){
			ball.speedY *= -1;
		}
		if(ball.x - ball.radius === 0 || ball.x + ball.radius === canvas.width){
			ball.speedX *= -1;
		}
		requestAnimationFrame(moveBall);
	}
	requestAnimationFrame(moveBall);
})();