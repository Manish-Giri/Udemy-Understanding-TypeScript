/**
 * Created by manishgiri on 10/30/16.
 */
// Exercise 1
const double = (value: number) => value * 2;
console.log(double(10));
console.log("---------------");

// Exercise 2
const greet = (name = "Max")  => {
    // if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
console.log("---------------");

// Exercise 3
const numbers = [-3, 33, 38, 5];
//console.log(Math.min.apply(Math, numbers));
console.log(Math.min(...numbers));
console.log("---------------");

// Exercise 4
const newArray = [55, 20];
//Array.prototype.push.apply(newArray, numbers);
newArray.push(...numbers);
console.log(newArray);
console.log("---------------");

// Exercise 5
const testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
/*var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];*/
console.log(result1, result2, result3);
console.log("---------------");

// Exercise 6
const scientist = {firstName: "Will", experience: 12};
let {firstName, experience} = scientist;
/*var firstName = scientist.firstName;
var experience = scientist.experience;*/
console.log(firstName, experience);
console.log("---------------");

