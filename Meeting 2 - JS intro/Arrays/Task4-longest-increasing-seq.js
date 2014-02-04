(function(){
	var findMaxIncreasingSeqButton = $("#find-max-sequence").click(findMaxSequence);
	function findMaxSequence(){
		$("#longest-increasing-sequence").html("");
		var sequence = $("#sequence").val();
		sequence = sequence.split(/(?:,| )+/);
		for(var i in sequence){
			sequence[i] = parseInt(sequence[i]);
		}
		var maxLength = 0;
		var startIndex = 0;
		var currentStartIndex = 0;
		var currentLength = 1;
		for(var i = 1; i < sequence.length; i+=1){
			var currentStartIndex;
			if(sequence[i] > sequence[i - 1]){
				currentLength += 1;
			}
			else{
				if(currentLength > maxLength){
					maxLength = currentLength;
					startIndex = currentStartIndex;
				}
				currentLength = 1;
				currentStartIndex = i;
			}
		}
		if(currentLength > maxLength){
			maxLength = currentLength;
			startIndex = currentStartIndex;
		}
		currentLength = 1;
		currentStartIndex = i;		
		for(var i = startIndex; i < startIndex + maxLength; i += 1){
			$("#longest-increasing-sequence").append(sequence[i] + " ");
		}
	}
})();