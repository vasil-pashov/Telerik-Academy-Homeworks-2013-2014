(function(){
	$("#replace").click(replaceButtonClick);
	function replaceButtonClick(){
		var text = $("#text").val();
		convertedText = replaceWhitespace(text);
		function replaceWhitespace(text){
			var regex = new RegExp("\\s","g");
			text = text.replace(regex,"&amp;nbsp;");
			return text;
		}
		$("#converted-text").html(convertedText);
	}
})();