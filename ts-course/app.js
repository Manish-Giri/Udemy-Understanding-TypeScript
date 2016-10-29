/**
 * Created by manishgiri on 10/28/16.
 */
console.log("It works!");
//string
var myName = "Manish";
//myName = 28;
console.log(typeof myName);
//number
var myNumber = 20;
//myNumber = 'a';
//boolean
var hasHobbies = false;
//hasHobbies = 3;
//assign types
//number and string assigned because of type 'any'
var myRealAge;
myRealAge = 27;
//myRealAge = '27';
var aString = 'Hi';
//aString = 3;
var aBoolean = true;
//aBoolean = 'hi';
//arrays
var hobbies = ['cooking', 'cycling'];
//hobbies = 3;
//hobbies = [100];
//no eror - hobbies = ['a string'];
//using any[] allows to store any types in array
var otherHobbies = ['cooking', 'resting'];
otherHobbies = [3];
//but has to be an array still
// otherHobbies = 3;
//tuples - arrays with mixed types
var address = [99, "Red Street"];
//error - address = ['x', 3];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//type any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    //return 3;
    return myName;
}
//void type
function sayHello() {
    console.log("Hi there!");
    //return 2;
}
console.log(returnMyName());
sayHello();
//argument types
function multiplyNumbers(value1, value2) {
    return value1 * value2;
}
//returns NaN because no type checking on function args
console.log(multiplyNumbers(1, 'DaX'));
function multNumbers(v1, v2) {
    return v1 * v2;
}
//console.log(multNumbers(2,'j'));
//function types
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiplyNumbers;
console.log(myMultiply(2, 20));
//ensuring a variable can be assigned a specific function type
var myMultiplier;
myMultiplier = multiplyNumbers;
console.log(myMultiplier(20, 10));
//error
//myMultiplier = sayHello;
//objects and types
//to ensure a specific set of props on object
var userData = {
    name: "John",
    age: 20
};
console.log(userData);
//cannot reassign userData to empty {}
//app.ts(117,1): error TS2322: Type '{}' is not assignable to type '{ name: string; age: number; }'.
//userData = {};
//cannot reassign userData to an object with different props
/*

userData = {
    a: "x",
    b: 3
}*/
//complex object and types
var complexObject = {
    data: [200, 2.9, 90],
    output: function (all) {
        return this.data;
    }
};
complexObject = {};
