(function(){
	$("#remove-tags").click(removeTagsButtonClick);
	function removeTagsButtonClick(){
		var text = $("#text").val();
		var convertedText = removeTags(text);
		$("#converted-text").html(convertedText);
		function removeTags(text){
			var regex = new RegExp("<[^>]*>","g");
			text = text.replace(regex,"");
			return text;		
		}
	}
})();