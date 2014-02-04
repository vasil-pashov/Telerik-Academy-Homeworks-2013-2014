function CheckIfItsInCirlce(){
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
	var euclideanDist = Math.sqrt(x*x + y*y);
	console.log(euclideanDist);
	if(euclideanDist <= 5){
		alert("It lies in the circle");
	}
	else{
		alert("It does not lie in the circle");
	}
}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}