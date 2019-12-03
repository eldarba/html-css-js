"use strict";

var obj = new Object();
console.log(obj);

// create a literal Object
var p = {
	id : 111,
	name : "Dan",
	age : 25
};
// add properties to the object
p.nationality = "Israeli";
p.getDetails = function() {
	return "Person[name=" + this.name + ", nationality=" + this.nationality
			+ "]";
}

// create a Date object
var date = new Date();

console.log(p);
console.log(date);

function Person(id, name) {
	this.id = id;
	this.age = 0;
	this.name = name;
}
Person.prototype.MAX_AGE = 120;
Person.prototype.setAge = function(age) {
	if (age <= Person.prototype.MAX_AGE) {
		this.age = age;
	}
};

var p = new Person(101, "Roni");
p.setAge(25);

console.log(p);

// 1. Define a CTOR
function Employee(id, name, salary) {
	// 2. call the super CTOR to do its part of initializations
	Person.call(this, id, name);
	this.salary = salary;
}
// 3. set Employee.prototype to be made out of Person.prototype
Employee.prototype = Object.create(Person.prototype);
// 4. set the CTOR of the prototype
Employee.prototype.constructor = Employee;

var e = new Employee(222, "Avi", 15000);
e.setAge(25);
console.log(e);


// JSON
console.log("Some JSON operations");
console.log("1. JSON.stringify(object) - Object to JSON");
var j1 = JSON.stringify(e);
console.log(j1);

console.log('2. JSON.parse("{"id":222,"age":25,"name":"Avi","salary":15000}") - JSON to Object');
var obj = JSON.parse(j1);
obj.__proto__ = Employee.prototype;
console.log(obj);
