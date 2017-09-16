var employees: string[] = ["Krilin", "Burma", "SanGoku"];

//Add elements
employees.push("Vegetta");

document.write(employees.toString() + "<br />");

//Array of complex data type (based on interface):
interface SuperHero {
    realName: String;
    superName: String;
}

var superHeroes: SuperHero[] = [];

//Add super heroes
superHeroes.push({
    realName: "Bruce Wayne",
    superName: "Batman"
})

//Output 1st element
document.write(superHeroes[0].realName + " is " + superHeroes[0].superName + "<br />");