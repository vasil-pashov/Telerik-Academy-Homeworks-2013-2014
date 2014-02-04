document.getElementById("change-color").onclick = function() {

	var inputs = document.getElementsByTagName("input");
	for(var i = 0; i < inputs.length; i+=1){
		if(inputs[i].getAttribute('type')=="color"){
			document.body.style.background = inputs[i].value;
		}
	}
};