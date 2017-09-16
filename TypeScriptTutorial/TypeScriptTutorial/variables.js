//variables
var myName = "Tim";
var myAge = 23;
var canVote = true;
var anything = "dog"; //dynamic type
anything = 35; //changing type from string to number.
document.getElementById("variables").innerHTML = "My Name is " + myName;
//type checks
document.write("myName is " + typeof (myName) + "<br />");
document.write("myAge is " + typeof (myAge) + "<br />");
document.write("canVote is " + typeof (canVote) + "<br />");
document.write("anything is " + typeof (anything) + "<br />");
document.write("<br /><br />");
//type conversion
var strToNumber = parseInt("5");
var numb = 5;
var numbToString = numb.toString();
document.write("strToNumber is " + typeof (strToNumber) + "<br />");
document.write("numbToString is " + typeof (numbToString) + "<br />");
//constants
var PI = 3.14;
//# sourceMappingURL=variables.js.map