(function (){
	var findMostFrequentNumberButton = $("#find-most-frequent-number-button").click(findMostFrequentNumber);
	function findMostFrequentNumber(){
		var sequence = $("#numbers").val();
		sequence = sequence.split(/(?:,| )+/);
		for(var i in sequence){
			sequence[i] = parseInt(sequence[i]);
		}
		sequence.sort();
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
		$("#most-frequent-number").html("The most frequent number is " + maxSubsequenceValue + " (" + maxSubsequenceLength + " times)" );

	}
	
})();