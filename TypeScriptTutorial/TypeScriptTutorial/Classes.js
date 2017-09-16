var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    //constructor
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numbOfAnimals++;
        //Note: 
        //  "private name"'s declaration can either be done normally as a field or 
        //  inside the constructor's parameter list.
    }
    //Methods
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    };
    //Class Functions
    Animal.howManyAnimals = function () {
        return Animal.numbOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numbOfAnimals = 0;
    return Animal;
}());
//Instanciation (creating objects)
var spot = new Animal("Spot", "Tom");
spot.ownerInfo();
spot.weight = 100; //calling the setter 
//[Note: private weight, but setter makes it callable just 
//like a public field]
document.write("Spot's weight : " + spot.weight + "<br />");
document.write("Amount of animeals : " + Animal.howManyAnimals() + "<br />");
// SUB CLASSES (Inheritance)
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numbOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog("Grover", "Jimmy");
document.write("Amount of animeals : " + Animal.howManyAnimals() + "<br />");
// instanceof
document.write("Is a dog a type of animal : " + (grover instanceof Animal) + "<br />");
// does field X exist inside Object?
document.write("Does grover have a name : " + ('name' in grover) + "<br />");
//# sourceMappingURL=Classes.js.map