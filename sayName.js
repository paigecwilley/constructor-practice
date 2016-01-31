//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  function Person(name, age){
  	this.name = name;
  	this.age = age;
  }


//Now create three instances of Person with data you make up

  var person1 = new Person('Willow', '1');
  var person2 = new Person('Ship', '27');
  var person3 = new Person('Paige', '26');


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  Person.sayName = function(instance) {
  	alert(instance.name);
  }