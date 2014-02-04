function getColor(){
	var red = (Math.random() * 255) | 0;
	var green = (Math.random() * 255) | 0;
	var blue = (Math.random() * 255) | 0;
	return "rgb(" + red + ", " + green + ", " + blue +")";	
}

function getRadnNumberInRange(min, max){
	return ((Math.random() * (max - min) + min) | 0)
}

function setElement(element, height, width, borderWidth, leftPosition, topPosition){
	element.style.backgroundColor = getColor();
	element.style.height = height + "px";
	element.style.width = width + "px";
	element.style.color = getColor();
	element.innerHTML = "<strong>div</div>"
	element.style.borderStyle = "solid";
	element.style.borderRadius = getRadnNumberInRange(0, 100) + "px";
	element.style.borderColor = getColor();
	element.style.borderWidth = borderWidth + "px";
	element.style.position = "absolute";
	element.style.left = leftPosition + "px";
	element.style.top = topPosition + "px";
}

function createRandomDiv(number){
	var div = document.createElement("div");
	var height = getRadnNumberInRange(20, 100);
	var width = getRadnNumberInRange(20, 100);
	var borderWidth = getRadnNumberInRange(1, 20);
	var leftPosition = ((Math.random() * (window.innerWidth - width - 2 * borderWidth)) | 0);
	var topPosition = ((Math.random() * (window.innerHeight - height - 2 * borderWidth)) | 0);
	setElement(div, height, width, borderWidth, leftPosition, topPosition);
	
	for(var i = 0; i < number; i++){
		var a = div.cloneNode(true);
		var height = getRadnNumberInRange(20, 100);
		var width = getRadnNumberInRange(20, 100);
		var borderWidth = getRadnNumberInRange(1, 20);
		var leftPosition = ((Math.random() * (window.innerWidth - width - 2 * borderWidth)) | 0);
		var topPosition = ((Math.random() * (window.innerHeight - height - 2 * borderWidth)) | 0);
		setElement(a, height, width, borderWidth, leftPosition, topPosition);
		document.body.appendChild(a);
	}
	document.body.appendChild(div);
}