(function(){
		document.getElementById("change-colors").onclick = function(){
		var textArea = document.getElementById("afected-area");
		textArea.style.color = document.getElementById("area-font-color").value;
		textArea.style.backgroundColor = document.getElementById("area-background-color").value;
		//alert(document.getElementById("area-font-color").value());
	}
})();