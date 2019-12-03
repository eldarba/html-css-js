function Rectangle() {
	this.length = 0;
	this.width = 0;
}

Rectangle.prototype.getArea = function() {
	return this.width * this.length;
}

function main3() {
	var r1 = new Rectangle();
	var r2 = new Rectangle();
	console.log(r1);
	console.log(r2);

	r1.length = 3;
	r1.width = 4;
	r2.length = 25;
	r2.width = 15;
	console.log(r1.getArea());
	console.log(r2.getArea());
	console.log(Rectangle.prototype.getArea.call(r1));
	console.log(Rectangle.prototype.getArea.call(r2));

}