(function (){
	$("#check-brackets-button").click(checkBracketsButtonClick);
	function checkBracketsButtonClick(){
		var expression = $("#expression").val();
		areBracketsCorrect = checkBrackets(expression);
		$("#answer").html(areBracketsCorrect.toString());
	}
	function checkBrackets(expression){
		var openningBracketCount = 0;
		var closingBracketCount = 0;
		for(var symbol in expression){
			if(expression[symbol] === "("){
				openningBracketCount += 1;
			}
			if(expression[symbol] === ")"){
				closingBracketCount += 1;
				if(closingBracketCount > openningBracketCount){
					return false;
				}
			}
		}
		if(openningBracketCount === closingBracketCount){
			return true;
		}
		return false;
	}
})();