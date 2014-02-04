(function(){
	$("#match").click(matchButtonClick);
	function matchButtonClick(){
		var text = $("#text").val();
		var url = matchURL(text);
		$("#address").html("protocol : " + url.protocol + " " + "<br/>" + "server: " + url.server + "<br/>" + "resource: " + url.resource);
		
		function matchURL(text){
			var url = {
				protocol: "",
				server: "",
				resource: ""
			};
			var urlRegex = new RegExp(".*(?=://)");
			var urlProtocol = text.match(urlRegex);
			url.protocol = urlProtocol[0];
			var serverRegex = new RegExp("w{3}[.][a-zA-Z0-9]*[.][a-z]*");
			var urlServer = text.match(serverRegex);
			url.server = urlServer[0];
			var urlResource = text.substring(urlProtocol[0].length + urlServer[0].length + 3);

			url.resource = urlResource;
			return url;
		}
		
	}
})();