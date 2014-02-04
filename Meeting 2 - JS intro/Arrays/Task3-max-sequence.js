(function(){
	var findMaxSequenceButton = $("#find-max-sequence").click(findMaxSequence);
	function findMaxSequence(){
		var sequence = $("#number-array").val().split(/(?:,| )+/);
		var maxSubsequenceLength = 0;
		var maxSubsequenceValue = undefined;
		for(var i = 0; i < sequence.length;){
			var currentValue = sequence[i];
			var prevValue = sequence[i];
			var currentLength = 0;
			while(currentValue === prevValue && i < sequence.length){
				currentLength +=1;
				i += 1;
				prevValue = currentValue;
				currentValue = sequence[i];
			}
			if(currentLength > maxSubsequenceLength){
				maxSubsequenceLength = currentLength;
				maxSubsequenceValue = prevValue;
			}
		}
		$("#max-sequence-answer").html("The max subsequence length is " + maxSubsequenceLength + " is created by number" + maxSubsequenceValue);
	}
})();

