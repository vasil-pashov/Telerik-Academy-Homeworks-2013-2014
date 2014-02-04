function FindArea(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var h = document.getElementById("h").value;
	a.trim();
	b.trim();
	h.trim();
	if(!isNumber(a)){
		alert("a is not a number");
		return;
	}
	if(!isNumber(b)){
		alert("b is not a number");
		return;
	}
	if(!isNumber(h)){
		alert("c is not a number");
		return;
	}	
	var area = (a * 1 + b * 1) / h * 2;
	alert(area);
}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}