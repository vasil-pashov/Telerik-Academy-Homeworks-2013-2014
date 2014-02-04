(function(){
	var finMaxMinButton = $("#find-max-min").click(findMaxMin);
	function findMaxMin(){
		$("#max-min").html("");
		var n = $("#numbers").val();
		var arrayOfNumbers = n.split(/(?:,| )+/);
		var max = arrayOfNumbers[0]*1, min = arrayOfNumbers[0]*1;
		for(var i = 0; i < arrayOfNumbers.length; i+=1){
			if(!isNumber(arrayOfNumbers[i])){
				alert("Invalid value");
				return;
			}
			if(arrayOfNumbers[i]*1 > max){
				max = arrayOfNumbers[i]*1;
			}
			if(arrayOfNumbers[i]*1 < min){
				min = arrayOfNumbers[i]*1;
			}
		}
		$("#max-min").html("Max = " + max + " Min = " + min);
	}
})();

function isNumber(n){
	n.trim();
	return !isNaN(parseFloat(n)) && isFinite(n);
}