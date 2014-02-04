(function(){
	$("#find-palindroms").click(findPalindromsButtonClick);
	function findPalindromsButtonClick(){
		$("palindroms").html("");
		var text = $("#text").val();
		text = text.split(" ");
		var palindroms = [];
		for(var wordIndex in text){
			if(isPalind(text[wordIndex])){
				palindroms.push(text[wordIndex]);
			}
		}
		//alert(palindroms);
		for(var i in palindroms){
			$("#palindroms").append(palindroms[i] + ", ");
		}
	}
	function isPalind(text){
		for(var i = 0; i < parseInt((text.length / 2) + 0.5); i+=1){
			if(text[i] !== text[text.length - 1 - i]){
				return false;
			}
		}
		return true;
	}
})();