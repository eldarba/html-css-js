function Circle() {
	this.radius = 0;
}

Circle.prototype.PI = 3.14;

Circle.prototype.getArea = function() {
	return this.PI * Math.pow(this.radius, 2);
}

function main4() {
	var c1 = new Circle();
	var c2 = new Circle();
	c1.radius = 5;
	c2.radius = 5;
	console.log(c1);
	console.log(c2);
	console.log(c1.PI);
	console.log(c2.PI);
	console.log(c1.getArea());
	console.log(c2.getArea());
	c2.PI = 5;
	console.log(c1.PI);
	console.log(c2.PI);
	console.log(c1.getArea());
	console.log(c2.getArea());

}