// [Define a function outside a class]
// -----------------------------------

var getSum = function (num1: number, num2: number): number {
    return num1 + num2;

    // Syntax: 
    // Name of function as var | param. list | return type.
}

var sum1: number = getSum(3, 5);
document.write("3 + 5 = " + sum1 + "<br />");


//Default value:
var getDiff = function (num1: number, num2 = 2, num3?: number): number {

    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }

    return num1 - num2;

    //Note:
    // num2 = 2 <- Default value
    // num3?    <- "not sure if I get a value"
}

document.write("5 - 2 = " + getDiff(5) + "<br />");    //default value kicks in.
document.write("5 - 2 - 3 = " + getDiff(5, 2, 3) + "<br />");    //default value kicks in.


//Parameter list with unkown amount of parameters
var sumAll = function (...nums: number[]): void {
    var sum = nums.reduce((a, b) => a + b, 0);  //Lambda: params, operation, initial val. for sum.

    document.write("Sum : " + sum + "<br />");
}

//any amount of arguments possible:
sumAll(1, 2, 3, 4, 5, 6);



// Delegates or Lambdas stored as variable
var addOne = (x) => x + 1;

document.write("addOne(1) : " + addOne(1) + "<br />");