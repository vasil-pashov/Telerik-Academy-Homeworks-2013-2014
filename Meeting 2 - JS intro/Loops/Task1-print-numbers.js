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
			$("#numbers").append(i + ", ");
		}
		$("#numbers").append(n);
	}
})();

function isNumber(n){
	n.trim();
	return !isNaN(parseFloat(n)) && isFinite(n);
}