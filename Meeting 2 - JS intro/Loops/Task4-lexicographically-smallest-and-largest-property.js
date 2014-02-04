(function(){
	var findPropertiesButton = $("#find-properties").click(findMaxMinProperties);
	function findMaxMinProperties(){
		var lexicographicallyBiggest = "getElementsByName()";
		var lexicographicallySmallest = "getElementsByName()";
		$("#max-min").html("Biggest = " + lexicographicallyBiggest + " Smallest = " + lexicographicallySmallest);
		for(var i in document){
			if(document[i] > lexicographicallyBiggest){
				lexicographicallyBiggest = document[i]; 
			}
			if(document[i] < lexicographicallySmallest){
				lexicographicallySmallest = document[i]; 
			}
		}
		//alert("asd");
		for(var i in window){
			if(window[i] > lexicographicallyBiggest){
				lexicographicallyBiggest = window[i]; 
			}
			if(window[i] < lexicographicallySmallest){
				lexicographicallySmallest = window[i]; 
			}
		}
		for(var i in navigator){
			if(navigator[i] > lexicographicallyBiggest){
				lexicographicallyBiggest = navigator[i]; 
			}
			if(navigator[i] < lexicographicallySmallest){
				lexicographicallySmallest = navigator[i]; 
			}
		}
		$("#max-min").html("Biggest = " + lexicographicallyBiggest + " Smallest = " + lexicographicallySmallest);
	}
})();