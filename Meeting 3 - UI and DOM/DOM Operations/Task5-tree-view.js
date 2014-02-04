(function(){
	var id = 0;
	var mainUl = document.createElement("ul");
	function createList(listElements, listElementText){
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		for(var i = 0; i < listElements; i+=1){
			var child = li.cloneNode(true);
			child.innerHTML = listElementText;
			child.id = id;
			id+=1;
			ul.appendChild(child);
		}
		return ul;
	}
	function dfsChange(element){
		if(element == undefined){
			return;
		}
		for(var i = 0; i < element.childNodes.length; i+=1){
			if(element.childNodes[i].style && element.childNodes[i].style.display == "block"){
				element.childNodes[i].style.display = "none";
			}
			dfsChange(element.childNodes[i]);
		}
	}
	mainUl = createList(3,"Item");
	mainUl.id = "main";
	function dfs(height, element){
		
		element.addEventListener("click", function(){
			if(element.childNodes[1]){
			if(element.childNodes[1].style.display == "none"){
				element.childNodes[1].style.display = "block";
			}
			else if(element.childNodes[1].style.display == "block"){
				element.childNodes[1].style.display = "none";
				var child = element.childNodes[1];
				dfsChange(child);
			}
			if(this.parentNode.style.display == "block"){
				this.parentNode.style.display = "none";
				
				
			}

			
		}
		else{
			if(this.parentNode.style.display == "block"){
				this.parentNode.style.display = "none";
				
			}
		}
	}, false);
		if(height <= 0){
			return;
		}
		element.appendChild(createList(2,"Sub Element"));
		element.childNodes[1].style.display = "none";
		for(var i = 0; i < element.childNodes[1].childNodes.length; i+=1){
			dfs(height - 1, element.childNodes[1].childNodes[i]);
		}
		
	}
	for(var i = 0; i < mainUl.childNodes.length; i++){
		dfs(3, mainUl.childNodes[i]);
	}
	document.body.appendChild(mainUl);
})();