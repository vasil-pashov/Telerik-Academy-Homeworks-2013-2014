(function(){
	var getDigitNameButton = $("#get-digit-name").click(showDigitName);
	function showDigitName(){
		var digit = $("#digit").val();
		if(!isNumber(digit)){
			alert("The input should be number");
			return;
		}
		digit = parseInt(digit);
		switch(digit){
			case 0: $("#digit-name").html("zero"); break;
			case 1: $("#digit-name").html("one"); break;
			case 2: $("#digit-name").html("two"); break;
			case 3: $("#digit-name").html("three"); break;
			case 4: $("#digit-name").html("four"); break;
			case 5: $("#digit-name").html("five"); break;
			case 6: $("#digit-name").html("six"); break;
			case 7: $("#digit-name").html("seven"); break;
			case 8: $("#digit-name").html("eight"); break;
			case 9: $("#digit-name").html("nine"); break;
			default: alert("It is not a digit"); break;
		}
	}
})();

function isNumber(n){
	n.trim();
	return !isNaN(parseFloat(n)) && isFinite(n);
}