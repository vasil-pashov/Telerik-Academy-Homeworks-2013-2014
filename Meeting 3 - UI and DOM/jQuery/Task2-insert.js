(function(){
	function insertBefore(insertTag, target){
		$(target).insertBefore(insertTag);
	}
	function insertAfter(insertTag, target){
		$(target).insertAfter(insertTag);
	}
	
	insertBefore("#div", "<div>Inserted before Initial tag</div>");
	insertAfter("#div", "<div>Inserted after Initial tag</div>");
})();