(function(){

	var getNumberNameButton = $("#get-number-name").click(getNumberName);
	function getNumberName(){
		var number = $("#number").val();
		number.trim();
		if(!isNumber(number)){
			alert("Enter a number");
		}
		if(number.length > 3){
			alert("The number has more than three digits");
		}
		number = parseInt(number);
		var result = "";
		result+=getDigitName(parseInt(number/100));
		if(result != ""){
			result+=" hundred ";
			if(parseInt(number % 10) == 0 || parseInt((number/10) % 10) == 1){
				result+="and ";

			}
		}
		if(number >= 10){
			if(parseInt((number/10) % 10) != 1){
				result+=getSecondDigitName(parseInt((number/10) % 10));
				result+=" ";
			}
			else{
				result+=(getNameBetweenTenAndTwenty(parseInt((number) % 100)));
				$('#answer').html($("#answer").html() + " " + result);
				return;
			}
			
		}
		result+=getDigitName(parseInt(number % 10));
		$('#answer').html($("#answer").html() + " " + result);
		
	}
	
	function getDigitName(digit){
		switch(digit){
			case 1: return "one";
			case 2: return "two";
			case 3: return "three";
			case 4: return "four";
			case 5: return "five";
			case 6: return "six";
			case 7: return "seven";
			case 8: return "eight";
			case 9: return "nine";
			case 0: return "";
		}
	}
	function getSecondDigitName(digit){
		switch(digit){
			case 2: return "twenty";
			case 3: return "thirty";
			case 4: return "fourty";
			case 5: return "fifty";
			case 6: return "sixty";
			case 7: return "seventy";
			case 8: return "eighty";
			case 9: return "ninety";
			case 0: return "and";
		}
	}
	function getNameBetweenTenAndTwenty(num){
		switch(num){
			case 10: return "ten";
			case 11: return "eleven";
			case 12: return "twelve";
			case 13: return "thirteen";
			case 14: return "fourteen";
			case 15: return "fifteen";
			case 16: return "sixteen";
			case 17: return "seventeen";
			case 18: return "eighteen";
			case 19: return "nineteen";
		}
	}
})();

function isNumber(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}