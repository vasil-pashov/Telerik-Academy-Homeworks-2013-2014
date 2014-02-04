(function (){
	$("#count-occurrence").click(countOccurrenceClick);
	function countOccurrenceClick(){
		var array = $("#array").val().split(/(?:,| )+/);
		var number = $("#number").val();
		var occurrence = countOccurrence(array, number);
		$("#answer").html(occurrence);
	}
	function countOccurrence(array, match){
		var count = 0;
		for(var i in array){
			if(array[i] == match){
				count++;
			}
		}
		return count;
	}
})();