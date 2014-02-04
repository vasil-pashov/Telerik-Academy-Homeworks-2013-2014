function newPoint(x, y){
	this.x = x;
	this.y = y;
}

function findDistance(firstPoint, secondPont){
	var distSquare = (secondPoint.x - firstPoint.x) * (secondPoint.x - firstPoint.x) + (secondPoint.y - firstPoint.y) * (secondPoint.y - firstPoint.y);
	return Math.sqrt(distSquare);
}

function newSegment(startPoint, endPoint){
	this.startPoint = startPoint;
	this.endPoint = endPoint;
	this.length = findDistance(startPoint, endPoint);
}


function isTriangle(a, b, c){
	if(a.length > b.length + c.length){
		return false;
	}
	if(b.length > c.length + a.length){
		return false;
	}
	if(c.length > a.length + b.length){
		return false;
	}
	return true;
}