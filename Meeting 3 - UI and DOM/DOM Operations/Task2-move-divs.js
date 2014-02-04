function getColor(){
	var red = (Math.random() * 255) | 0;
	var green = (Math.random() * 255) | 0;
	var blue = (Math.random() * 255) | 0;
	return "rgb(" + red + ", " + green + ", " + blue +")";	
}

var divs = [];

function createDivs(divCount){
	divs[0] = document.createElement("div");
	divs[0].style.width = "50px";
	divs[0].style.height = "50px";
	divs[0].style.border = "1px solid black";
	divs[0].style.position = "absolute";
	divs[0].style.borderRadius = "10px"
	document.body.appendChild(divs[0]);
	for(var i = 0; i < divCount; i+=1){
		
		var x = 200 + 100 * Math.cos(i * 360 / divCount * Math.PI / 180);
		var y = 200 + 100 * Math.sin(i * 360/ divCount * Math.PI / 180);
		divs[i].style.left = x + "px";
		divs[i].style.top = y + "px";
		divs[i].style.backgroundColor = getColor();
		divs[i + 1] = divs[i].cloneNode(true);
		document.body.appendChild(divs[i]);
		var degrees = i * 360 / divCount;
		divs[i].setAttribute('data-degrees', degrees);
		//alert(x + " " + y);
	}
	
}

setInterval(function (){
for(var i = 0; i < divs.length; i+=1){
	var degrees = (parseFloat(divs[i].getAttribute('data-degrees')) + 1) % 360;
	var x = 200 + 100 * Math.cos(degrees * Math.PI / 180);
	var y = 200 + 100 * Math.sin(degrees * Math.PI / 180);	
	divs[i].style.left = x + "px";
	divs[i].style.top = y + "px";	
	divs[i].setAttribute('data-degrees', degrees);
	}
}, 100);


