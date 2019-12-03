/**
 * Different ways to create objects in js
 */
// "use strict";
function execute() {

	// option 1 - create an object as literal
	var p1 = {
		id : 101,
		name : "aaa",
		age : 35,
		grow : function() {
			this.age++;
		}
	};

	// option 2 - create an object and add properties with values
	var p2 = new Object();
	p2.id = 102;
	p2.name = "bbb";
	p2.age = 41;
	p2.grow = function() {
		this.age++;
	}

	// option 3 - define a CTOR for object type (blueprint, class)
	function Person(id, name, age) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.grow = function() {
			this.age++;
		}
	}

	printPerson(p1);
	printPerson(p2);

	p1.grow();
	p2.grow();

	printPerson(p1);
	printPerson(p2);

	var p3 = p1;
	printPerson2(p3);

	delete p3.id;
	delete p3.grow;
	printPerson2(p3);

	var p10 = new Person(201, "Avi", 33);
	printPerson2(p10);
	p10.grow();
	printPerson2(p10);

	var x = Object.create(Person);
	x.id = 1111;
	x.name = "xxxxx";
	x.age = 88;
	console.log(x);
}

function printPerson(p) {
	console.log("Person[id=" + p.id + ", name=" + p.name + ", age=" + p.age
			+ "]");
}
function printPerson2(p) {
	var txt = "", prop, val;
	for (prop in p) {
		val = p[prop];
		if (!(val instanceof Function)) {
			txt += prop + "=" + val + ", "
		} else {
			txt += "[" + typeof val + ": " + prop + "]";
		}
	}

	console.log(txt);
}
