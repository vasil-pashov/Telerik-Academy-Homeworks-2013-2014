(function(){
	var printNumbersButton = $("#print-number-to-n").click(print);
	function print(){
		$("#numbers").html("");
		var n = $("#n").val();
		if(!isNumber(n)){
			alert("Enter a number");
			return;
		}
		n = parseInt(n);
		for(var i = 1; i < n; i+=1){
			if(i % 21 !== 0){//7 * 2 = 21 NOK 
				$("#numbers").append(i + " ");
			}
		}
	}
})();

function isNumber(n){
	n.trim();
	return !isNaN(parseFloat(n)) && isFinite(n);
}