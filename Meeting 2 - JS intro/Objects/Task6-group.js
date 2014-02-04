function group(array, param){
	var group = [];
	switch(param){
		case "age":
		case "firstname":
		case "lastname":{
			for(var i in array){
				group[array[i][param]] = array[i];
			}
		}
		
	}
	return group;
}