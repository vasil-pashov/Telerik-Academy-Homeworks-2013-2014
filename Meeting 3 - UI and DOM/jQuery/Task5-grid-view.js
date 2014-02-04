function gridView(){
	hasHeader: false;
	isNested: false;
	rows = [];
	gridObject: {};
}

gridView.prototype.initialize = function(selector, father){
	this.hasHeader = false;
	this.isNested = false;
	this.rows = [];
	this.gridObject = $("<table cellspacing=\"0\" cellpading=\"0\"></table>")[0];
	if(selector[0] === "#"){
		$(this.gridObject).attr("id",selector.substring(1));

	}
	else if(selector[0] === "."){
		$(this.gridObject).attr("class",selector.substring[1]);
	}
	$(father).append(this.gridObject);
}

gridView.prototype.addRow = function(){
	var row = $("<tr></tr>")[0];
	for(var i = 0; i < arguments.length; i += 1){
		$(row).append("<td>" + arguments[i] + "</td>");
	}
	$(this.gridObject).append(row);
	this.rows.push(row);
}

gridView.prototype.addHeader = function(){
	if(this.hasHeader === false){
		var first = $(this.gridObject).children()[0];
		var header = $("<tr class=\"header\"></tr>")[0];
		for(var i = 0; i < arguments.length; i += 1){
			$(header).append("<td>" + arguments[i] + "</td>");
		}
		$(header).prependTo("table > tbody");
		this.hasHeader = true;
		this.rows.unshift(header);
	} 
	else{
		alert("There is header");
		return;
	}
}

gridView.prototype.nestGrid = function(selector, father){
	if(this.isNested === true){
		alert("It is nested once");
		return;
	}
	var nestedGrid = new gridView();
	nestedGrid.initialize("#sa");
	var colspan = $(this.rows[0]).children().length;
	nestedGrid.addRow("sdfsdfsd", "sdfdsf");
	var containerRow = $("<tr class=\"nested\"></tr>")[0];
	var containerCell = $("<td></td>")[0];
	$(containerCell).attr("colspan", colspan);
	$(containerCell).append(nestedGrid.gridObject);
	$(containerRow).append(containerCell);
	$(father).attr("class", "father");
	father.addEventListener("click", showHide, false);
	$(containerRow).css("display", "none");
	$(father).after(containerRow);
	nestedGrid.isNested = true;
	
}

function showHide(event){
	if($(this).next().css("display") == "none"){
		$(this).next().fadeToggle("slow")
	}
	else if($(this).next().css("display") == "table-row"){
		$(this).next().fadeToggle("slow")
	}
}
