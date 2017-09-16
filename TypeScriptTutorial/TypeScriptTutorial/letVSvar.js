var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
document.write("sampLet: " + sampLet + "<br />");
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write("sampVar: " + sampVar + "<br />");
//With var, a javascript - thing happens.  The .write() allocates the value of
//the inner most sampVar (456) as the value of the global variable sampVar.
//On "let" variables, this won't happen. The "let sampLet = 456;" lifespan ends 
//inside its scope of the if statement.
document.write("<br /> With var, a javascript - thing happens.  The .write() allocates of <br />" +
    "the inner most sampVar (456) as the value of the global variable sampVar. <br />" +
    "On 'let' variables, this won't happen. The 'let sampLet = 456;' lifespan ends  <br />" +
    "inside its scope of the if statement.");
//# sourceMappingURL=letVSvar.js.map