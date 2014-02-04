function hasProperty(obj, searchProp){
	for(var prop in obj){
		if(prop === searchProp){
			return true;
		}
	}
	return false;
}