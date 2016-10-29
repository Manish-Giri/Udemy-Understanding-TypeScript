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
console.log(multNumbers(2, 3));
