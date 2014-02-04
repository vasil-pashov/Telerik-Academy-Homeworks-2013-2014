function checkThirdBit(){
	var number = document.getElementById("number").value;
	number.trim();
	if(!isNumber(number)){
		alert("Enter a number");
		return;
	}
	var shiftedNum = number >>3;
	//alert(shiftedNum);
	if(shiftedNum != 0 && shiftedNum & 1 == true){
		alert("The third bit is 1");
	}
	else{
		alert("The third bit is 0");
	}
}

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}