(function(){
	$("#find-mails").click(findMailsButtonClick);
	function findMailsButtonClick(){
		var text = $("#text").val();
		var mails = getMails(text);
		function getMails(text){
			var index = 0;
			var regex = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}",'g');
			var mails = text.match(regex);
			return mails;
		}
		$("#mails").html(mails);
	}
})();