function Check(){
	var x = document.getElementById("x").value;
	var y = document.getElementById("y").value;
	x.trim();
	y.trim();
	if(!isNumber(x)){
		alert("X coordinate is not a number");
		return;
	}
	if(!isNumber(y)){
		alert("Y coordinate is not a number");
		return;
	}	
	x = x | 1;
	y = y | 1;
	var distToCircleCenter = Math.sqrt((x - 1)*(x - 1) + (y - 1)*(y - 1));
	var isInCircle = distToCircleCenter <= 3;

	var isInRectangle = (x >= -1 && x <= 5) && (y <= 1 && y >= -1);
	var answer = "The point is";
	if(isInCircle){
		answer+=" in the circle";
	}
	else{
		answer+=" in the circle";
	}
	if(isInRectangle){
		answer+=" and in the rectangle";
	}
	else{
		answer+=" and out of the rectangle";
	}
	alert(answer);
}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}