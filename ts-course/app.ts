
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
