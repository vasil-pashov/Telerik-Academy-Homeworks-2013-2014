function getAllDirectlyNestedDivs(){
	var divs = document.querySelectorAll("div div");
	return divs;
}

function getAllDirectlyNestedDivsByTagName(){
	var divs = document.getElementsByTagName("div");
	var nested = []
	for(var i in divs){
		if(divs[i].children && divs[i].children[0]){
			if(divs[i].children[0].tagName === "DIV"){
				nested.push(divs[i].children[0]);
			}
		}
	}
	return nested;
}