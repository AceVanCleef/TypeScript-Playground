//variables
var myName: string = "Tim";
var myAge: number = 23;
var canVote: boolean = true;
var anything: any = "dog";  //dynamic type
anything = 35;  //changing type from string to number.

document.getElementById("variables").innerHTML = "My Name is " + myName;

//type checks
document.write("myName is " + typeof (myName) + "<br />");
document.write("myAge is " + typeof (myAge) + "<br />");
document.write("canVote is " + typeof (canVote) + "<br />");
document.write("anything is " + typeof (anything) + "<br />");

document.write("<br /><br />");


//type conversion
var strToNumber: number = parseInt("5");
var numb: number = 5;
var numbToString: string = numb.toString();

document.write("strToNumber is " + typeof (strToNumber) + "<br />");
document.write("numbToString is " + typeof (numbToString) + "<br />");

//constants
const PI = 3.14;

