function findArea(){
	var height = document.getElementById("height").value;
	height.trim();
	if(!isNumber(height)){
		alert("Height is not a number");
		return;
	}
	var width = document.getElementById("width").value;
	width.trim();
	if(!isNumber(width)){
		alert("Width is not a number");
		return;
	}
	alert(height*width);
}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}