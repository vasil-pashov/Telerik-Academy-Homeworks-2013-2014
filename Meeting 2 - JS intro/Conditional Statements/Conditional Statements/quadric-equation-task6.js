(function(){
	var solveEquationButton = $("#solve-equation-button").click(solveEquation);
	function solveEquation(){
		var a = $("#a").val();
		var b = $("#b").val();
		var c = $("#c").val();
		if(!isNumber(a)){
			alert("A is not a number");
			return;
		}
		if(!isNumber(b)){
			alert("B is not a number");
			return;
		}
		if(!isNumber(c)){
			alert("C is not a number");
			return;
		}
		var D = 1*b*b - 4*a*c;
		if(D < 0){
			$("#result").html("No real values");
		}
		else if(D === 0){
			var result = (-1*b)/(2*a);
			$("#result").html(result);
		}
		else if(D > 0){
			var result1 = ((-1*b) + (Math.sqrt(D)) ) / (2*a);
			var result2 = ((-1*b) - (Math.sqrt(D)) ) / (2*a);
			$("#result").html("x1 = " + result1 + " x2= " + result2);
		}
	}
})();

function isNumber(n){
	n.trim();
	return !isNaN(parseFloat(n)) && isFinite(n);
}