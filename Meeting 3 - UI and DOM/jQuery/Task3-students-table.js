(function(){
	var students = [];
	var gosho = {};
	var pesho = {};
	pesho.firstName = "Pesho";
	pesho.lastName = "Peshev";
	pesho.grade = 12;
	gosho.firstName = "Gosho";
	gosho.lastName = "Goshev";
	gosho.grade = 5;
	students.push(gosho);
	students.push(pesho);
	function createTable(){
		$("body").append("<table id=\"students\" cellspacing=\"0\" cellpadding=\"0\"><table>");
		var table = $("#students");
		var tr = $("<tr></tr>");
		tr.append("<td class=\"student-data\"> First Name</td>");
		tr.append("<td class=\"student-data\">Last Name</td>");
		tr.append("<td class=\"student-data\">Grade</td>");		
		$(table).append(tr);
	}
	function addStudents(){
		var table = $("#students");
		for(var i = 0; i < students.length; i+=1){
			var tr = $("<tr></tr>");
			tr.append("<td class=\"student-data\">" + students[i].firstName + "</td>");
			tr.append("<td class=\"student-data\">" + students[i].lastName + "</td>");
			tr.append("<td class=\"student-data\">" + students[i].grade + "</td>");
			$(table).append(tr);
		}
	}
	createTable();
	addStudents();
})();