/// <reference path="jquery-2.0.3.js" />
/// <reference path="class.js" />
var controls = controls || {};
(function (c) {
	var ListView = Class.create({
		init: function (itemsSource, rows, cols) {
			if (!(itemsSource instanceof Array)) {
				throw "The itemsSource of a ListView must be an array!";
			}
			this.itemsSource = itemsSource;
			this.rows = rows;
			this.cols = cols;
			alert(this.rows)
		},
		render: function (template) {
			alert(this.rows);
			var list = document.createElement("table");
			for (var i = 0; i < this.rows; i++) {
				var listItem = document.createElement("td");
				var item = this.itemsSource[i];
				listItem.innerHTML = template(item);
				list.appendChild(listItem);
			}
			return list.outerHTML;
		}
	});

	c.getListView = function (itemsSource) {
		return new ListView(itemsSource);
	}
}(controls || {}));