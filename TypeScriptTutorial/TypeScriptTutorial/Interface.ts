//defining the interface:
interface SuperHero {
    realName: String;
    superName: String;
}

//using the interface:
var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"

}

document.write(superman.realName + " is " + superman.superName + "<br />");