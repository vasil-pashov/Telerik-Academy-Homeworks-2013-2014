(function (){
	$("#find-last-digit-name-button").click(getLastDigit);
	var name;
	function getLastDigit (){
		var number = $("#number").val();
		number = parseInt(number);
		name = getLastDigitName(number);
		$("#last-digit-name").html(name);
	}
	function getLastDigitName(number){
		var lastDigit = number % 10;
		switch(lastDigit){
			case 0: return "zero";
			case 1: return "one";
			case 2: return "two";
			case 3: return "three";
			case 4: return "four";
			case 5: return "five";
			case 6: return "six";
			case 7: return "seven";
			case 8: return "eight";
			case 9: return "nine";
			default: return "error";
		}
	}
	
	
})();