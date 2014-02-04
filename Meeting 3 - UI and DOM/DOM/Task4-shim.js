(function(){
	if(!document.querySelector){
		document.querySelector = function(selector){
			switch(selector.charAt(0)){
				case "#": return document.getElementById(selector.substring(1)); break;
				case ".": return document.getElementsByClassName(selector.substring(1))[0]; break;
				default: return document.getElementsByTagName(selector.substring(1))[0]; break;
			}
		}
	}
	if(!document.querySelectorAll){
		document.querySelectorAll = function(selector){
			switch(selector.charAt(0)){
				case "#": return document.getElementById(selector.substring(1)); break;
				case ".": return document.getElementsByClassName(selector.substring(1)); break;
				default: return document.getElementsByTagName(selector.substring(1)); break;
		}
	}
})();