/**
 * Created by manishgiri on 10/30/16.
 */
//ARROW FUNCTIONS
console.log("ARROW FUNCTIONS");
const addNumbers = function(num1: number, num2: number): number {
    return num1 + num2;
};

console.log(addNumbers(10,15));

const multipliedNumbers = (num1: number, num2: number) => num1 * num2;
console.log(multipliedNumbers(6,7));