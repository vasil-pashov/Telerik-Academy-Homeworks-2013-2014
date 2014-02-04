function deepCopy(objectToBeCopied){
	var resultObject = {};
	for(var prop in objectToBeCopied){
		resultObject[prop] = objectToBeCopied[prop];
	}
	return resultObject;
}