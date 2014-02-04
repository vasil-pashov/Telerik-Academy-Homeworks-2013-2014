function checkForReminder(){
	var number = document.getElementById("number").value;
	number.trim();
	if(isNumber(number) == false){
		alert("Enter a number");
		return;
	}
	if(number % 7 == 0 && number % 5 == 0){
		alert("Yes");
	}
	else{
		alert("No");
	}
}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}