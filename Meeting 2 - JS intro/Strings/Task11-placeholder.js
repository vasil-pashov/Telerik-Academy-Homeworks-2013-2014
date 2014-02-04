function stringFormat(){
	var text = arguments[0];
	var patternMatch = new RegExp("{[0-9]}");
	var placeholder = text.match(patternMatch);
	while(placeholder){
		var num = placeholder.toString()[1];
		var index = 2;
		while(placeholder.toString()[index] !== "}"){
			num += placeholder.toString()[index];
			index += 1;
		}
		num = parseInt(num);
		text = text.replace("{"+num+"}",arguments[num + 1]);
		placeholder = text.match(patternMatch);
	}
	return text;
}
