
/**
 * Created by manishgiri on 10/28/16.
 */
console.log("It works!");

//string
let myName = "Manish";
//myName = 28;
console.log(typeof myName);

//number
let myNumber = 20;
//myNumber = 'a';

//boolean
let hasHobbies = false;
//hasHobbies = 3;

//assign types
//number and string assigned because of type 'any'
let myRealAge: number;
myRealAge = 27;
//myRealAge = '27';

let aString: string = 'Hi'
//aString = 3;

let aBoolean: boolean = true;
//aBoolean = 'hi';

//arrays
let hobbies = ['cooking', 'cycling']
//hobbies = 3;
//hobbies = [100];
//no eror - hobbies = ['a string'];

//using any[] allows to store any types in array
let otherHobbies: any[] = ['cooking', 'resting']
otherHobbies = [3];
//but has to be an array still
// otherHobbies = 3;

//tuples - arrays with mixed types
let address: [number, string] = [99, "Red Street"];
//error - address = ['x', 3];

//enum
enum Color {
    Gray , //0
    Green,  //1
    Blue    //2
}

let myColor: Color = Color.Green
console.log(myColor);

//type any
let car: any = "BMW"
console.log(car);
car = {brand: "BMW", series: 3}
console.log(car);

//functions
function returnMyName(): string{
    //return 3;
    return myName;

}

//void type
function sayHello(): void {
    console.log("Hi there!");
    //return 2;
}


console.log(returnMyName());
sayHello();

//argument types
function multiplyNumbers(value1, value2): number {
    return value1 * value2;
}

//returns NaN because no type checking on function args
console.log(multiplyNumbers(1, 'DaX'));

function multNumbers(v1: number, v2: number): number {
    return v1*v2;
}
//console.log(multNumbers(2,'j'));

//function types
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiplyNumbers;
console.log(myMultiply(2,20));

//ensuring a variable can be assigned a specific function type
let myMultiplier: (val1: number, val2: number) => number;
myMultiplier = multiplyNumbers;
console.log(myMultiplier(20,10));
//error
//myMultiplier = sayHello;

//objects and types
//to ensure a specific set of props on object
let userData: {name: string, age: number} = {
    name: "John",
    age: 20
}

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
let complexObject: {data: number[], output: (all: boolean) => number[]} = {
    data: [200, 2.9, 90],
    output: function (decision: boolean): number[] {
        return this.data;
    }
};

//complexObject = {}
