/**
 * 
 */

function Car(number, color) {
	this.number = number;
	this.color = color;
	this.km = 0;
	this.drive = function(distance) {
		this.km += distance;
	}
	this.toString = function() {
		return "Car[number=" + this.number + ", color=" + this.color + ", km="
				+ this.km + "]";
	}
}

function main() {
	var car1 = new Car(1, "green");
	var car2 = new Car(2, "red");
	console.log(car1);
	console.log(car2.toString());

	car1.drive(100);
	console.log(car1);
}