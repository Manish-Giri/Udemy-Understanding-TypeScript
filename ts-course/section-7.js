/**
 * Created by manishgiri on 11/26/16.
 */
var section7;
(function (section7) {
    //interfaces
    console.log("INTERFACES");
    console.log("****************************");
    function greet(person) {
        console.log("Hello " + person.firstName);
    }
    function changeName(person) {
        person.firstName = "Anna";
    }
    var person = {
        firstName: "Max",
        age: 27,
        hobbies: ["Cooking", "cycling"],
        greet: function (lastName) {
            console.log("I am " + this.firstName + " " + lastName);
        }
    };
    //object literals are checked more strictly in TS
    greet(person);
    //greet({firstName: "Max", age: 29});
    changeName(person);
    greet(person);
    console.log("****************************");
    person.greet("Willis");
    console.log("****************************");
    var Person = (function () {
        function Person() {
        }
        Person.prototype.greet = function (lastName) {
            console.log("In class, I am " + this.firstName + " " + lastName);
        };
        return Person;
    }());
    var myPerson = new Person();
    myPerson.firstName = "John";
    console.log(myPerson.firstName);
    myPerson.greet("Wayne");
})(section7 || (section7 = {}));
