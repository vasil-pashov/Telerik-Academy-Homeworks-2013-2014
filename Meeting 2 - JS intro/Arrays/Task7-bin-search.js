(function (){
	var binarySearchButton = $("#binary-search-button").click(binarySearch);
	function binarySearch(){
		var array = $("#numbers").val();
		var value = $("#value").val();
		value = parseInt(value);
		array = array.split(/(?:,| )+/);
		for(var i in array){
			array[i] = parseInt(array[i]);
		}
		var leftIndex = 0;
		var rightIndex = array.length - 1;
		if(value > array[rightIndex] || value < array[leftIndex]){
			$("#value-index").html(value + " is not in the array");
			return;
		}
		while(leftIndex !== rightIndex){
			var middle = parseInt((leftIndex + rightIndex) / 2);
			//alert(leftIndex + " " + rightIndex + " " + middle);
			if(array[middle] === value){
				$("#value-index").html("The index of " + value + " is " + middle);
				return;
			}
			else if(array[leftIndex] < value && value < array[middle]){
				rightIndex = middle;
			}
			else if(array[middle] < value && value < array[rightIndex]){
				leftIndex = middle;
			}
		}
		$("#value-index").html(value + " is not in the array");
	}
})();