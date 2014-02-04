(function(){
	var sortButton = $("#sort-button").click(selectionSort);
	function selectionSort(){
		$("#sorted-array").html("");
		var array = $("#number-array").val();
		array = array.split(/(?:,| )+/);
		for(var i in array){
			array[i] = parseInt(array[i]);
		}
		for(var i = 0; i < array.length; i+=1){
			var minValue = array[i];
			var minIndex = i;
			for(var j = i + 1; j < array.length; j += 1){
				if(minValue > array[j]){
					minValue = array[j];
					minIndex = j;
				}
			}
			swapArrayElements(i, minIndex, array);
		}
		for(var i in array){
			$("#sorted-array").append(array[i] + " ");
		}
	}
	function swapArrayElements(index1 , index2, array){
		var temp = array[index1];
		array[index1] = array[index2];
		array[index2] = temp;
	}
})();