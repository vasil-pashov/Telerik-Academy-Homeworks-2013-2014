(function(){
	var initTime = new Date();
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	function BodyPart(){
		x: 0;
		y: 0;
		radius: 0;
	}
	BodyPart.prototype.initialize = function(x, y, radius){
		this.x = x;
		this.y = y;
		this.radius = radius;
	}
	function Dwarf(){
		bodyParts: [];
		speed: 0;
	}
	Dwarf.prototype.initialize = function(){
		this.bodyParts = [];
		//---------leftLeg----------0
		var leftLeg = new BodyPart();
		leftLeg.initialize(100, 490, 10);
		this.bodyParts.push(leftLeg);
		context.beginPath();
		context.arc(100, 490, 10, 0, Math.PI * 2);
		context.stroke();
		//---------rightLeg-----------1
		var rightLeg = new BodyPart();
		rightLeg.initialize(120, 490, 10);
		this.bodyParts.push(rightLeg);
		context.beginPath();
		context.arc(120, 490, 10, 0, Math.PI * 2);
		context.stroke();	
		//---------body---------2
		var body = new BodyPart();
		body.initialize(110, 461, 20);
		this.bodyParts.push(body);
		context.beginPath();
		context.arc(110, 461, 20, 0, Math.PI * 2);
		context.stroke();
		//--------head-----------3
		var head = new BodyPart();
		head.initialize(110, 425, 15);
		this.bodyParts.push(head);
		context.beginPath();
		context.arc(110, 425, 15, 0, Math.PI * 2);
		context.stroke();		
		//----------leftHand-------------4	
		var leftHand = new BodyPart();
		leftHand.initialize(80, 461, 10);
		this.bodyParts.push(leftHand);
		context.beginPath();
		context.arc(80, 461, 10, 0, Math.PI * 2);
		context.stroke();
		//----------rightHand-------------5
		var rightHand = new BodyPart();
		rightHand.initialize(140, 461, 10);
		this.bodyParts.push(rightHand);
		context.beginPath();
		context.arc(140, 461, 10, 0, Math.PI * 2);
		context.stroke();		
		this.speed = 5;		
	}
	Dwarf.prototype.moveLeft = function(){
		if(this.bodyParts[4].x - this.bodyParts[4].radius <= 0){
			return;
		}
		for(var i = 0; i < this.bodyParts.length; i += 1){
			this.bodyParts[i].x -= this.speed
		}
	}
	Dwarf.prototype.moveRight = function(){
		if(this.bodyParts[5].x + this.bodyParts[5].radius >= canvas.width){
			return;
		}
		for(var i = 0; i < this.bodyParts.length; i += 1){
			this.bodyParts[i].x += this.speed;
		}
	}
	Dwarf.prototype.draw = function(){
		for(var i = 0; i < this.bodyParts.length; i += 1){
			context.beginPath();
			context.arc(this.bodyParts[i].x, this.bodyParts[i].y, this.bodyParts[i].radius, 0, Math.PI * 2);
			context.stroke();
		}
	}
	function Rock(){
		x: 0;
		y: 0;
		radius: 0;
		speed: 0;
	}
	Rock.prototype.Init = function (radius){
		this.radius = radius;
		this.x = ((Math.random() * (canvas.width - radius * 2)) | 0);
		this.y = 0;
		this.speed = 0.5;
	}
	var dwarf = new Dwarf();
	var rocks = [];
	dwarf.initialize();
	
	document.addEventListener("keydown", function(event){
		if (!event) {
				event = window.event;
			}
		switch(event.keyCode){
			case 39:
				dwarf.moveRight();
				break;
			case 37:
				dwarf.moveLeft();
				break;
		}
	}, false);
	var dropTime = 1500;
	var initSpeed = 0.55;
	function dropRock(){
		var currentTime = new Date();
		var rock = new Rock();
		rock.Init(20);
		rock.speed = Math.random();
		if(rock.speed === 0){
			rock.speed += 0.1;
		}
		rocks.push(rock);
	}
	var interval = setInterval(dropRock,dropTime);
	function drawRocks(){
		for(var i = 0; i < rocks.length; i += 1){
			context.beginPath();
			context.arc(rocks[i].x, rocks[i].y, rocks[i].radius, 0, Math.PI * 2);
			context.stroke();
		}
	}
	function moveRocks(){
		for(var i = 0; i < rocks.length; i += 1){
			rocks[i].y += rocks[i].speed;
			if(rocks[i].y - rocks[i].radius >= canvas.height){
				rocks.splice(i, 1);
				i--;
			}
		}
	}
	function check(){
		for(var i = 0; i < dwarf.bodyParts.length; i+=1){
			for(var j = 0; j < rocks.length; j += 1){
				if(rocks[j].y >= 200){
					var dist = (dwarf.bodyParts[i].x - rocks[j].x) * (dwarf.bodyParts[i].x - rocks[j].x) +
					(dwarf.bodyParts[i].y - rocks[j].y) * (dwarf.bodyParts[i].y - rocks[j].y);
					if(dist < (dwarf.bodyParts[i].radius + rocks[j].radius) * (dwarf.bodyParts[i].radius + rocks[j].radius)){
						alert("Game Over");
						clearInterval(interval);
						return true;
					}
				}
			}
		}
	}
	function run(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		dwarf.draw();
		drawRocks();
		moveRocks();
		if(check())
			return;
		requestAnimationFrame(run);
	}
	requestAnimationFrame(run);
})();