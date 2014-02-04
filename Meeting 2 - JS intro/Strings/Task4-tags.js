(function (){
	$("#convert").click(convertButtonClick);
	function convertButtonClick(){
		var text = $("#text").val();
		var convertedText = convert(text);
		function convert(text){
			var index = 0;
			while(index !== -1){
				var uIndex = text.indexOf("<upcase>", index);
				var lIndex = text.indexOf("<lowcase>", index);
				var mIndex = text.indexOf("<mixcase>", index);
				index = minIndex(minIndex(uIndex, lIndex), mIndex);
				if(index === -1){
					break;
				}
				var nextIndex;
				switch(index){
					case index = uIndex:{
						nextIndex = getNextClosing("<upcase>", "</upcase>", index, text);
						var converted = text.substring(index + 8, nextIndex);
						converted = removeTags(converted);
						converted = converted.toUpperCase();
						text = [text.slice(0, index), converted, text.slice(nextIndex + 9)].join("");
					}break;
					case index = lIndex:{
						nextIndex = getNextClosing("<lowcase>", "</lowcase>", index, text);
						var converted = text.substring(index + 9, nextIndex).toLowerCase();
						converted = removeTags(converted);
						converted = converted.toLowerCase();
						text = [text.slice(0, index), converted, text.slice(nextIndex + 10)].join("");
					}break;
					case index = mIndex:{
						nextIndex = getNextClosing("<mixcase>", "</mixcase>", index, text);
						var converted = text.substring(index + 9, nextIndex);
						converted = toMixCase(removeTags(converted));
						text = [text.slice(0, index), converted, text.slice(nextIndex + 10)].join("");

					}break;
					default :"error";break;
				}
			}
			return text;
		}
		$("#converted-text").html(convertedText);
	}
	function getNextClosing(tag, closingTag, index, text){
		var nextOpeningIndex = text.indexOf(tag, index + 1);
		var nextClosingIndex = text.indexOf(closingTag, index);
		while(nextOpeningIndex < nextClosingIndex && nextOpeningIndex !== -1){
			nextOpeningIndex = text.indexOf(tag, nextOpeningIndex + 1);
			nextClosingIndex = text.indexOf(closingTag, nextClosingIndex + 1);
		}
		
		return nextClosingIndex;
		
	}
	function minIndex(a, b){
		if(a === -1 && b > -1){
			return b;
		}
		if( b=== -1 && a > -1){
			return a;
		}
		return a < b ? a : b;
	}
	function removeTags(text){
		var regex = new RegExp("(<upcase>|</upcase>|<lowcase>|</lowcase>|<mixcase>|</mixcase>)",'g');
		var result = text.replace(regex,"");
		return result;
	}
	function toMixCase(text){
		var result="";
		for(var i in text){
			var rand = parseInt(Math.random()*10);
			if(rand % 2 == 0){
				result += text[i].toUpperCase();
			}
			else{
				result += text[i].toLowerCase();
				
			}
		}
		return result;
	}
})();