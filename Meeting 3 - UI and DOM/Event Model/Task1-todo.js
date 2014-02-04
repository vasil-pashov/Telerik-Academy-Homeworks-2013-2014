(function(){
	function mark(){
		if($(this).attr("data-marked") == "false"){
			$(this).attr("data-marked", "true");
			$(this).css("background-color", "red");
		}
		else{
			$(this).attr("data-marked", "false");
			$(this).css("background-color", "white");			
		}
	}
	function addElement(){
		var list = $("#todo-list");
		var toDo = $("#new-item").val();
		if(toDo && toDo != ""){
			list.append("<li>" + toDo + "</li>");
		}
		$(list.children()[list.children().length - 1]).click(mark);
		$(list.children()[list.children().length - 1]).attr("data-marked", "false");
	}
	function deleteItems(){
		var list = $("#todo-list");
		for(var i = 0; i < list.children().length; i+=1){
			if(list.children()[i]){
				if($(list.children()[i]).attr("data-marked") == "true"){
					$(list.children()[i]).remove();
					i-=1;
				}
			}
		}
	}
	function showHide(){
		var list = $("#todo-list");
		if($(list).css("display") == "block"){
			$(this).html("Show");
			$(list).css("display", "none");
		}
		else{
			$(this).html("Hide");
			$(list).css("display", "block");			
		}
	}
	$("#add-item").click(addElement);
	$("#delete-item").click(deleteItems);
	$("#show-hide").click(showHide);
})();