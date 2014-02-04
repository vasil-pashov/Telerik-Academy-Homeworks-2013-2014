function EvaluateSign(){
	var num1 = $("#num1").val();
	var num2 = $("#num2").val();
	var num3 = $("#num3").val();
	if(!isNumber(num1)){
		alert("The first input is not a number");
		return;
	}
	if(!isNumber(num2)){
		alert("The second input is not a number");
		return;
	}
	if(!isNumber(num3)){
		alert("The third input is not a number");
		return;
	}	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	num3 = parseInt(num3);
	var sign = "-";
	//if we have even number of negatives the product is positive
	var negativeNumCnt = 0;
	if(num1 < 0){
		negativeNumCnt++;
	}
	if(num2 < 0){
		negativeNumCnt++;
	}
	if(num3 < 0){
		negativeNumCnt++;
	}
	if(negativeNumCnt % 2 == 0){
		sign="+";
	}
	$("#sign").html(sign);
}

function isNumber(n){
	n.trim();
	return !isNaN(parseFloat(n)) && isFinite(n);
}