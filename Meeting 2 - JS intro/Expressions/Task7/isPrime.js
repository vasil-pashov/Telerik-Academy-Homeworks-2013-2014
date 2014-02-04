function CheckIsPrime(){
	var number = document.getElementById("number").value;
	number.trim();
	if(!isNumber(number)){
		alert("Enter a number");
		return;
	}
	var isPrime = true;
	for(var i = 2; i <= Math.sqrt(number); i++){
		if(number % i == 0){
			isPrime = false;
			break;
		}
	}
	if(isPrime == true){
		alert("Prime");
	}
	else{
		alert("Not prime");
	}
}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}