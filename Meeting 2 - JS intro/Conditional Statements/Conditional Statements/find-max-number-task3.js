(function(){
	"use strict";
	var findMaxButton = $("#find-max-number").click(buttonClick);
	function buttonClick(){
		var num1 = $("#num1").val();
		var num2 = $("#num2").val();
		var num3 = $("#num3").val();
		if(!isNumber(num1)){
			alert("First input is not a number");
			return;
		}
		if(!isNumber(num2)){
			alert("Second input is not a number");
			return;
		}
		if(!isNumber(num3)){
			alert("Third input is not a number");
			return;
		}
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		num3 = parseInt(num3);
		var maxNum = GetMax(num1, num2);
		maxNum = GetMax(maxNum,num3);
		$("#max-num").html(maxNum);
		
	}
	function GetMax(a, b){
		return a > b? a : b;
	}
})();

function isNumber(n){
	n.trim();
	return !isNaN(parseFloat(n)) && isFinite(n);
}