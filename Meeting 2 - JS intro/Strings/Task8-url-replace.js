(function(){
	$("#replace").click(replaceButtonClick);
	function replaceButtonClick(){
		var text = $("#text").val();
		var newText = replace(text);
		$("#result").html(newText);
	}
	function replace(text){
		var indexOfApeningAnchor = 0;
		var regex = new RegExp("</a>","g");
		text = text.replace(regex,"[/URL]")
		while(text.match(/<a href="/)){
			
			var anchor = text.match(/<a href="/).toString();
			
			anchor = anchor.replace(/<a href="/,"[URL=");
			text = text.replace(/<a href="/, anchor);
			text = text.replace(/">/,"]");
			
		}
		alert(text);
	}
})();