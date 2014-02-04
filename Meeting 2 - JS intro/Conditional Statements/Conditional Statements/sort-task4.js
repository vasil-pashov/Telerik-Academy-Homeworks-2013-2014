(function(){
	var sortButton = $("#sort-descending").click(sortDescending);
	function sortDescending(){
	var number1 = $("#number1").val();
	var number2 = $("#number2").val();
	var number3 = $("#number3").val();
	if(!isNumber(number1)){
		alert("The first input is not a number");
		return;
	}
	if(!isNumber(number2)){
		alert("The second input is not a number");
		return;
	}
	if(!isNumber(number3)){
		alert("The third input is not a number");
		return;
	}	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	num3 = parseInt(num3);
	var sortedNumbers = [number1, number2, number3].sort(compare);
	$("#sorted-numbers").html(sortedNumbers);
	}
	function compare(a, b){
		return a == b ? 0: a < b ? 1 : -1;
	}
}
)();

function isNumber(n){
	n.trim();
	return !isNaN(parseFloat(n)) && isFinite(n);
}