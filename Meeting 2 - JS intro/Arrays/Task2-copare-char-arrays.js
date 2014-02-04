(function(){

	var compareButton = $("#comapre-button").click( function() {compareCharArrays($("#text1").val().split(""), $("#text2").val().split(""));});
	function compareCharArrays(charArray1, charArray2){
		var minLength = charArray1.length;
		var areSameLengths = (charArray1.length === charArray2.length);
		if(minLength > charArray2.length){
			minLength = charArray2.length;
		}
		var areSameSymbols = true;
		for(var i = 0; i < minLength; i+=1){
			if(charArray1[i].toLowerCase() !== charArray2[i].toLowerCase()){
				if(charArray1[i].toLowerCase() < charArray2[i].toLowerCase()){
					alert("charArray1 comes first");
				}
				else{
					alert("charArray2 comes first");
				}
				areSameSymbols = false;
				return;
			}
		}
		if(areSameLengths && areSameSymbols){
			alert("Arrays lexicographically identical");
			return;
		}
		if(charArray1.length < charArray2.length){
			alert("charArray1 comes first");
		}
		else{
			alert("charArray2 comes first");
		}
}
})();