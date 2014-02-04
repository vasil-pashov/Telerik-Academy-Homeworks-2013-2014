(function(){
	var findOccurrencesButton = $("#find-occurrences").click(findOccurrencesButtonClick);
	function findOccurrencesButtonClick(){
		var text = $("#text").val();
		var word = $("#word").val();
		var isCaseSensitive = $("#case").val();
		isCaseSensitive == "true"? isCaseSensitive = true: isCaseSensitive = false;
		$("#occurrences").html(findOccurrences(text, word, isCaseSensitive));
	}
	function findOccurrences(originalText, originalWord, isCaseSensitive){
		var text;
		var word;
		if(!isCaseSensitive){
			text = originalText.toLowerCase();
			word = originalWord.toLowerCase();
		}
		else{
			text = originalText;
			word = originalWord;
		}
		
		var occurrences = 0;
		var currentIndex = 0;
		while(text.indexOf(word, currentIndex) != -1){
			occurrences += 1;
			currentIndex = text.indexOf(word, currentIndex) + word.length;
		}
		return occurrences;
	}

})();