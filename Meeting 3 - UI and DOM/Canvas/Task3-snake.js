(function(){
	var highScore = 0;
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var intervalId = {};
	function Ball(){
		x: 0;
		y: 0;
		radius: 0;
	}
	
	function Snake(){
		body: [];
		speed: 0;
		xDirection: 0;
		yDirection: 0;
	}
	Snake.prototype.addBodyPart = function(x, y, radius, head){
		var ball = new Ball();
		ball.x = x;
		ball.y = y;
		ball.radius = radius;
		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI * 2);
		if(head){
			context.fillStyle = "#0000000";
			context.fill();
		}
		context.stroke();
		this.body.push(ball);
	}
	Snake.prototype.drawBody = function(){
		context.beginPath();
		context.arc(food.x, food.y, food.radius, 0, 2 * Math.PI);
		context.stroke();
		context.beginPath();
		context.arc(this.body[0].x, this.body[0].y, this.body[0].radius, 0, Math.PI * 2);
		context.fillStyle = "#0000000";
		context.fill();
		console.log(this.body[0].x + " " + this.body[0].y)
		if(this.body[0].x + this.body[0].radius > canvas.width || this.body[0].x - this.body[0].radius < 0){
			alert("Game Over");
			clearInterval(intervalId);
			if( ($("#high-score").html() | 0) < highScore){
				$("#high-score").html(highScore);
			}
			context.clearRect(0, 0, canvas.width, canvas.height);
			snake.initialize(10);
			snake.drawBody();
			highScore = 0;
		}
		if(this.body[0].y + this.body[0].radius > canvas.height || this.body[0].y - this.body[0].radius < 0){
			alert("Game Over");
			clearInterval(intervalId);
			if( ($("#high-score").html() | 0) < highScore){
				$("#high-score").html(highScore);
			}
			context.clearRect(0, 0, canvas.width, canvas.height);
			snake.initialize(10);
			snake.drawBody();
			highScore = 0;
		}
		for(var i = 0; i < this.body.length; i+=1){
			if(i !== 0 && this.body[i].x === this.body[0].x && this.body[i].y === this.body[0].y){
				alert("Game Over");
				clearInterval(intervalId);
				if( ($("#high-score").html() | 0) < highScore){
					$("#high-score").html(highScore);
				}
				context.clearRect(0, 0, canvas.width, canvas.height);
				snake.initialize(10);
				snake.drawBody();
				highScore = 0;
			}
			context.beginPath();
			context.arc(this.body[i].x, this.body[i].y, this.body[i].radius, 0, Math.PI * 2);
			context.stroke();
		}
	}
	Snake.prototype.initialize = function(radius){
		var midX = 10;
		var midY = 10
		this.body = [];
		this.speed = 0;
		this.xDirection = 0;
		this.yDirection = 0;	
		this.addBodyPart(midX, midY, radius, true);
		for(var i = 1; i < 3; i+=1){
			this.addBodyPart(midX, radius * 2 * i + midY, radius);
		}
	}
	Snake.prototype.changeBody = function(head){
		this.body.unshift(head);
		if(head.x === food.x && head.y === food.y){
			generateFood();
			highScore += 1;
		}
		else{
			this.body.pop();
		}
		this.drawBody();
	}
	function moveRight(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		var head = new Ball();
		head.x = snake.body[0].x - 2*10;
		head.y = snake.body[0].y;
		head.radius = 10;
		snake.changeBody(head);
	}
	function moveLeft(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		var head = new Ball();
		head.x = snake.body[0].x + 2*10;
		head.y = snake.body[0].y;
		head.radius = 10;
		snake.changeBody(head);		
	}
	function moveUp(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		var head = new Ball();
		head.x = snake.body[0].x;
		head.y = snake.body[0].y - 2*10;
		head.radius = 10;
		snake.changeBody(head);	
	}
	function moveDown(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		var head = new Ball();
		head.x = snake.body[0].x;
		head.y = snake.body[0].y + 2*10;
		head.radius = 10;
		snake.changeBody(head);	
	}
	var snake = new Snake();
	snake.initialize(10);
	var food = new Ball();
	generateFood();
	document.addEventListener("keydown", function(event){
		if(!snake.xDirection){
			if(event.keyCode === 37){
				snake.xDirection = -1;
				snake.yDirection = 0;
				clearInterval(intervalId);
				//alert("x -1");
				intervalId = setInterval(moveRight,200);
				return;
			}
			if(event.keyCode === 39){
				snake.xDirection = 1;
				snake.yDirection = 0;	
				clearInterval(intervalId);
				//alert("x 1");
				intervalId = setInterval(moveLeft,200);		
				return;
			}
		}
		if(!snake.yDirection){
			if(event.keyCode === 38){
				clearInterval(intervalId);
				snake.xDirection = 0;
				snake.yDirection = -1;
				//alert("y -1");
				clearInterval(intervalId)
				intervalId = setInterval(moveUp,200);
				return;
			}
			if(event.keyCode === 40){
				clearInterval(intervalId);
				snake.xDirection = 0;
				snake.yDirection = 1;
				//alert("y +1");
				clearInterval(intervalId)
				intervalId = setInterval(moveDown,200);
				return;
			}				
		}
	}, false);
	function generateFood(){
		var x = (( Math.random() * 39 + 1) | 0);
		var y = (( Math.random() * 39 + 1) | 0);
		if(x % 2 === 0){
			x += 1;
		}
		if(y % 2 === 0){
			y += 1;
		}
		y *= 10;
		x *= 10;
		food.x = x;
		food.y = y;
		food.radius = 10;
		//context.clearRect(0, 0, context.width, context.height)
		context.beginPath();
		context.arc(food.x, food.y, food.radius, 0, 2 * Math.PI);
		context.stroke();
		console.log(x, y);
	}
	
})();