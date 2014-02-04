(function(){
	var tags = ["cms", "javascript", "js", 
	"ASP.NET MVC", ".net", ".net", "css", 
	"wordpress", "xaml", "js", "http", "web", 
	"asp.net", "asp.net MVC", "ASP.NET MVC", 
	"wp", "javascript", "js", "cms", "html", 
	"javascript", "http", "http", "CMS"];
	function countOccurrences(){
		var tagOccurrence = [];
		for(var i = 0; i < tags.length; i+=1){
			if(tagOccurrence[tags[i]]){
				tagOccurrence[tags[i]] += 1;
			}
			else{
	
				tagOccurrence[tags[i]] = 1;
			}
		}
		for(var i in tagOccurrence){
			console.log(i + " " + tagOccurrence[i]);
		}
		return tagOccurrence;
	}
	function generateTagCloud(tags, minFontSize, maxFontSize){
		var occurrences = countOccurrences();
		var maxOccurrences = 0;
		for(var i in occurrences){
			if(occurrences[i] > maxOccurrences){
				maxOccurrences = occurrences[i];
			}
		}
		var fragment = document.createDocumentFragment();
		for(var i in occurrences){
			var div = document.createElement("div");
			div.style.display = "inline";
			div.innerHTML = i;
			div.style.fontSize = (minFontSize + (maxFontSize - minFontSize) * (occurrences[i] / maxOccurrences)) + "px";
			div.style.margin = "5px";
			fragment.appendChild(div);
		}
		var container = document.createElement('div');
        container.style.width = 400 + 'px';
        container.style.height = 500 + 'px';	
		container.appendChild(fragment);
		document.body.appendChild(container);
	}
	generateTagCloud(tags, 17, 45);
})();