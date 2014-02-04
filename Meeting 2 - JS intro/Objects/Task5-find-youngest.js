function findYoungestPerson(persons){
	var youngestPerson = persons[0];
	for(var i = 1; i < persons.length; i+=1){
		if(youngestPerson.age > persons[i].age){
			youngestPerson = persons[i];
		}
	}
	return youngestPerson;
}