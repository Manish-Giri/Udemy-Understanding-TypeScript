/**
 * Created by manishgiri on 10/30/16.
 */
var section4;
(function (section4) {
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
    //default parameters
    var countDown = function (start) {
        if (start === void 0) { start = 10; }
        while (start > 0) {
            console.log(start);
            start--;
        }
        console.log("Done! " + start);
    };
    //countDown(10);
    //countDown();
    //SPREAD OPERATOR
    var numbers = [1, 20, 3, 55, 99];
    console.log(Math.max(20, 3, 99, 55, 1));
    console.log(Math.max.apply(Math, numbers));
    //REST OPERATOR
    function makeArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return args;
    }
    console.log(makeArray(1, 2, 3, 4, 6));
    //IMP DIFFERENCE ->
    //1. When used in a function call, ... is used as a spread operator, ie. it spreads out the array into a list
    //2. When used in a function definition, ... is used as rest op, ie. it packs all list items into an array
    //also - rest params should be last ones in arguments
    //DESTRUCTURING ARRAYS
    var myHobbies = ["cooking", "cycling"];
    var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
    console.log("hobby1: " + hobby1 + " and hobby2: " + hobby2);
    //DESTRUCTURING OBJECTS
    var myuserData = { userName: 'John', age: 23 };
    var myName = myuserData.userName, myAge = myuserData.age;
    console.log(myName, myAge);
})(section4 || (section4 = {}));
