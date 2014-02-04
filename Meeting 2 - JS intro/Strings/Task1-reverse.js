(function (){
	$("#reverse-button").click(reverseButtonClick);
	function reverseButtonClick(){
		var string = $("#string").val();
		reversedString = reverseString(string);
		$("#reversed-string").html(reversedString);
	}
	function reverseString(string){
		var reversedString = string.split("").reverse().join("");
		return reversedString;
	}
})();