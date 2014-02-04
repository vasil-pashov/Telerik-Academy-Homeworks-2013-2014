function checkIsEven(){
	var number = document.getElementById('num').value;
	number.trim();
	if(isNumber(number) == false){
		alert("Enter a number");
		return;
	}
	number = parseInt(number.value);
	if(number % 2 == 0){
		//console.log("The number is even");
		alert("The number is even");
	}
	else{
		//console.log("The number is odd");
		alert("The number is odd");
	}
}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}