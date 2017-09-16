class Animal {
    //class fields
    public favFood: string;

    static numbOfAnimals: number = 0;


    //constructor
    constructor(private name: string, private owner: string) {

        Animal.numbOfAnimals++;

        //Note: 
        //  "private name"'s declaration can either be done normally as a field or 
        //  inside the constructor's parameter list.
    }


    //Methods
    ownerInfo() {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    }

    //Class Functions
    static howManyAnimals(): number {
        return Animal.numbOfAnimals;
    }


    //getters and setters
    private _weight: number;

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }
}



//Instanciation (creating objects)
var spot = new Animal("Spot", "Tom");

spot.ownerInfo();

spot.weight = 100; //calling the setter 
//[Note: private weight, but setter makes it callable just 
//like a public field]

document.write("Spot's weight : " + spot.weight + "<br />");


document.write("Amount of animeals : " + Animal.howManyAnimals() + "<br />");



// SUB CLASSES (Inheritance)
class Dog extends Animal {
    constructor(name: string, owner: string) {
        super(name, owner);
        Dog.numbOfAnimals++;
    }
}

var grover = new Dog("Grover", "Jimmy");

document.write("Amount of animeals : " + Animal.howManyAnimals() + "<br />");

// instanceof
document.write("Is a dog a type of animal : " + (grover instanceof Animal) + "<br />");

// does field X exist inside Object?
document.write("Does grover have a name : " + ('name' in grover) + "<br />");