interface Vehicle {
    // define methods
    drive(): any;

}

class Car implements Vehicle {
    constructor(private wheels: number) {
    }

    drive(): void {
        document.write("This car drives with " + this.wheels + " wheels <br />");
    }
}

class Bicycle implements Vehicle {
    constructor(private wheels: number) {
    }

    drive(): void {
        document.write("This bicycle drives with " + this.wheels + " wheels <br />");
    }
}


// Instanciation
var car = new Car(4);
var bicycle = new Bicycle(2);

car.drive();
bicycle.drive();