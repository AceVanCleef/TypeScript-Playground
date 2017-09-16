// [Define a function outside a class]
// -----------------------------------
var getSum = function (num1, num2) {
    return num1 + num2;
    // Syntax: 
    // Name of function as var | param. list | return type.
};
var sum1 = getSum(3, 5);
document.write("3 + 5 = " + sum1 + "<br />");
//Default value:
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
    //Note:
    // num2 = 2 <- Default value
    // num3?    <- "not sure if I get a value"
};
document.write("5 - 2 = " + getDiff(5) + "<br />"); //default value kicks in.
document.write("5 - 2 - 3 = " + getDiff(5, 2, 3) + "<br />"); //default value kicks in.
//Parameter list with unkown amount of parameters
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0); //Lambda: params, operation, initial val. for sum.
    document.write("Sum : " + sum + "<br />");
};
//any amount of arguments possible:
sumAll(1, 2, 3, 4, 5, 6);
// Delegates or Lambdas stored as variable
var addOne = function (x) { return x + 1; };
document.write("addOne(1) : " + addOne(1) + "<br />");
//# sourceMappingURL=Functions.js.map