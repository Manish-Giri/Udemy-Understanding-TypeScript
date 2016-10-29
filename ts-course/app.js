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
address = ['x', 3];
