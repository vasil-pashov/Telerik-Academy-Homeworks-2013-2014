(function (){
	$("#count-substring-occurrence").click(countSubstringOccurrenceButtonClick);
	function countSubstringOccurrenceButtonClick(){
		var text = $("#text").val();
		var substring = $("#substring").val();
		var substringOccurrenceCount = findSubstringOccurrence(text.toLowerCase(), substring.toLowerCase());
		$("#substring-occurrence").html(substringOccurrenceCount);
		function findSubstringOccurrence(text, substring){
			var substringOccurrenceCount = 0;
			var index = 0;
			while(index < text.length - 1 && index !== -1){
				index = text.indexOf(substring, index);
				if(index !== -1){
					substringOccurrenceCount += 1;
					index += substring.length;
				}
			}
			return substringOccurrenceCount;
		}
	}
})();