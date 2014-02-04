(function(){
	var findMaxNumberButton = $("#find-max-number").click(findMaxNumberButton);
	function findMaxNumberButton(){
		var numbers = $("#numbers").val();
		var arrayOfNumbers = numbers.split(/(?:,| )+/);
		var max = (arrayOfNumbers[0] | 1);
		for(var i in arrayOfNumbers){
			if((arrayOfNumbers[i] | 1) > max){
				max = arrayOfNumbers[i]; 
			}
		}
		$("#max-number").html(max);
	}
})();

function isNumber(n){
	n.trim();
	return !isNaN(parseFloat(n)) && isFinite(n);
}