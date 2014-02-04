function ExamineValues() {
	var a = $("#num1").val();
	var b = $("#num2").val();
	if(!isNumber(a)){
		alert("First input is not a number");
		return;
	}
	if(!isNumber(b)){
		alert("Second input is not a number");
		return;
	}
	a = parseInt(a);
	b = parseInt(b);
	if(a > b){
		var c = a;
		a = b;
		b = c;
	}
	$("#answer").html(a + " " + b);
}

function isNumber(n){
	n.trim();
	return !isNaN(parseFloat(n)) && isFinite(n);
}