class Car {
    constructor(number, color) {
        this.number = number;
        this.color = color;
        this.speed = 0;
    }

    drive(speed) {
        this.speed = speed;
    }
}

var car1 = new Car(101, "Red");
var car2 = new Car(102, "Blue");

console.log(car1);
console.log(car2);

car2.drive(55);

console.log(car1);
console.log(car2);