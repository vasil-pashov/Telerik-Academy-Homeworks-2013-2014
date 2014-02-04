(function (){
    var c=document.getElementById("canvas");
    var cxt=c.getContext("2d");
    var centerX = 150;
    var centerY = 150;
    cxt.moveTo(centerX, centerY);
		var STEPS_PER_ROTATION = 60;
		var increment = 2*Math.PI/STEPS_PER_ROTATION; 

		
	function draw(){
		var STEPS_PER_ROTATION = 60;
		var increment = 2*Math.PI/STEPS_PER_ROTATION;       
		var theta = increment;
		cxt.beginPath();
		  while( theta < 40*Math.PI) {
		  var newX = centerX + theta * Math.cos(theta); 
		  var newY = centerY + theta * Math.sin(theta); 
		  cxt.lineTo(newX, newY);
		  theta = theta + increment;
		}
		cxt.stroke();		
	}
	var theta1 = increment;
	var interval = setInterval(function(){
	  var newX = centerX + theta1 * Math.cos(theta1); 
      var newY = centerY + theta1 * Math.sin(theta1); 
	  
	  cxt.clearRect(0, 0, 400, 400);
	  draw();
	  cxt.beginPath();
	  cxt.arc(newX, newY, 10, 0, Math.PI * 2);
	  cxt.stroke();
	  cxt.beginPath();
      cxt.lineTo(newX, newY);
	  cxt.stroke();
      theta1 = theta1 + increment;
	  if(theta1 >= 40*Math.PI){
		clearInterval(interval);
	  }
	}, 50)
    
})();