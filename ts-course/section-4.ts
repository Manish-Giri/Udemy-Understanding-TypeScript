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

const greeter = () => console.log("Hello World!!");
greeter();

const greetFriend = friend => console.log(`Hi ${friend}`);
greetFriend("James");

//default parameters
const countDown = (start: number = 10): void => {
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log(`Done! ${start}`);
};
//countDown(10);
//countDown();

//SPREAD OPERATOR
const numbers = [1,20,3, 55, 99];
console.log(Math.max(20, 3, 99, 55, 1));
console.log(Math.max(...numbers));

//REST OPERATOR
function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray(1,2,3,4,6));

//IMP DIFFERENCE ->
//1. When used in a function call, ... is used as a spread operator, ie. it spreads out the array into a list
//2. When used in a function definition, ... is used as rest op, ie. it packs all list items into an array
//also - rest params should be last ones in arguments

//DESTRUCTURING ARRAYS
const myHobbies = ["cooking", "cycling"];
const [hobby1, hobby2] = myHobbies;
console.log(`hobby1: ${hobby1} and hobby2: ${hobby2}`);
