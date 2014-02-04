(function (){
	$("#count-divs").click(countDivs);
	function countDivs(){
		var numberOfDivs = $('div').length;
		alert(numberOfDivs);
	}
})();