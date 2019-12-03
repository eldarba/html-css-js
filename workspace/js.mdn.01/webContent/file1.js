"use strict";

function Shape(color) {
	this.color = color;
}
Shape.prototype.getArea = function() {
	return -1;
}

function Rectangle(color, length, width) {
	Shape.call(this, color);
	this.length = length;
	this.width = width;
}
Rectangle.prototype = Object.create(Employee.prototype);
Shape.prototype.getArea = function() {
	return -1;
}
