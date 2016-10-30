/**
 * Created by manishgiri on 10/30/16.
 */
//ARROW FUNCTIONS
console.log("ARROW FUNCTIONS");
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(10, 15));
var multipliedNumbers = function (num1, num2) { return num1 * num2; };
console.log(multipliedNumbers(6, 7));
var greeter = function () { return console.log("Hello World!!"); };
greeter();
var greetFriend = function (friend) { return console.log("Hi " + friend); };
greetFriend("James");
