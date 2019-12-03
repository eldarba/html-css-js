"use strict";

// OOP in JavaScript
/*
 * While Java is a class based language (there are classes and objects),
 * JavaScript is prototype based, which means that there are not classes, only
 * objects. a prototype is an object used as a template from which to get the
 * initial properties for a new object. So each object has a prototype - which
 * defines its basic content (properties and methods).
 * 
 * To define a complex type in JS we do not define a class but just a CTOR from
 * which to create the objects. In the CTOR we initialize the object properties
 * and in the CTOR prototype we add methods.
 */

// Shape CTOR
function Shape(color) {
	this.color = color; // initialize a property
}
/*
 * here we get the prototype of Shape and add a function to it, so all Shape
 * objects have this function as a method (methods are functions of objects):
 */
Shape.prototype.getArea = function() {
	return -1;
}

// Rectangle CTOR (extends Shape)
function Rectangle(color, length, width) {
	/*
	 * call the super CTOR with the current rectangle instance reference to
	 * initialize the inherited properties (color):
	 */
	Shape.call(this, color);
	// then initialize the rectangle non inherited properties:
	this.length = length;
	this.width = width;
}
// to extend Shape set the prototype to be a copy of the Shape prototype
Rectangle.prototype = Object.create(Shape.prototype);
// set the CTOR of the newly created prototype:
Rectangle.prototype.constructor = Rectangle;
// extend or override prototype methods:
Rectangle.prototype.getArea = function() {
	return this.length * this.width;
}

// Circle CTOR (extends Shape)
function Circle(color, radius) {
	Shape.call(this, color);
	this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function() {
	return Math.PI * Math.pow(this.radius, 2);
}

// some runnable code - create 3 shapes
var s1 = new Shape("Red");
var s2 = new Circle("Blue", 5);
var s3 = new Rectangle("Green", 8, 6);
// put the shapes in an array
var shapes = [ s1, s2, s3 ];
// print all shapes and their area.
for (var i = 0; i < shapes.length; i++) {
	console.log(shapes[i]);
	console.log(" area=" + shapes[i].getArea());
}

