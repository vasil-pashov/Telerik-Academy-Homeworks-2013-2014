(function (){
	$("#check").click(checkClick);
	function checkClick(){
		var array = $("#array").val().split(/(?:,| )+/);
		for(var i in array){
			array[i] *= 1;
		}
		var index = -1;
		for(var i = 0; i < array.length; i+=1){
			if(check(array, i)){
				index = i;
				break;
			}
		}
		$("#answer").html(index);
	}
	function check(array, index){
		
		if(index > 0 && array[index - 1] >= array[index]){
			return false;
		}
		if(index < array.length - 1 && array[index + 1] >= array[index]){
			return false;
		}
		return true;
	}
})();