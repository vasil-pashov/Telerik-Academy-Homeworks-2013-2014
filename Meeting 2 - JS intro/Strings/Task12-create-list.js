(function (){
	$("#create-list-button").click(createListButtonClick);
	function createListButtonClick(){
		var content = $("#text").val();
		var people =
		[
			{ name: "Ivan Petrov", age: 23 },
			{ name: "Kiril Ivanov", age: 24 },
			{ name: "Petar Georgiev", age: 25 },
			{ name: "Nikolai Kirilov", age: 26 }
		];
		var result = generateList(people, content);
		alert(result);
		document.getElementById("list").innerHTML = result;
	}
	function generateList(array, template) {
	var result = "<ul>";
		var replacementRegExp = /-{(.*?)}-/;
		for (var i in array) {
			var listItem = template;
			var match;
			while (match = listItem.match(replacementRegExp)) {
				var replacementValue = array[i][match[1]];
				listItem = listItem.replace(replacementRegExp, replacementValue);
			}

		   
			result += "<li>" + listItem + "</li>";
		}

		result += "</ul>";
		return result;
	}
})();