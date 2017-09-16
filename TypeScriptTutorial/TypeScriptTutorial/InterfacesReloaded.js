var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        document.write("This car drives with " + this.wheels + " wheels <br />");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        document.write("This bicycle drives with " + this.wheels + " wheels <br />");
    };
    return Bicycle;
}());
// Instanciation
var car = new Car(4);
var bicycle = new Bicycle(2);
car.drive();
bicycle.drive();
//# sourceMappingURL=InterfacesReloaded.js.map