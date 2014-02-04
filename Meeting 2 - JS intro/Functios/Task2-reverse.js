(function(){
	var reverseButton = $("#reverse-button").click(reversePrint);
	function reversePrint(){
		var number = $("#number").val();
		number = parseInt(number);
		$("#reversed-number").html(reverse(number));
	}
	function reverse(number){
		var reversedNumber = 0;
		while(number){
			reversedNumber += number % 10;
			reversedNumber *= 10;
			number /= 10;
			number = parseInt(number);
		}
		return reversedNumber / 10;
	}
})();