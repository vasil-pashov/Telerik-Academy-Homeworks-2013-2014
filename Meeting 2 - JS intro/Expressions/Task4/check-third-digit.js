function checkIfThirdDigitIs7(){
	var number = document.getElementById("number").value;
	number.trim();
	if(!isNumber(number)){
		alert("Enter a number");
		return;
	}
	var dividedNumber = parseInt((number/100));
	var lastDigit = dividedNumber % 10;
	if(lastDigit === 7){
		alert("Yes");
	}
	else{
		alert("No");
	}
}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}