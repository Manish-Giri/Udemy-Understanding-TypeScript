/**
 * Created by manishgiri on 11/26/16.
 */
namespace section7 {
    //interfaces

    console.log("INTERFACES");
    console.log("****************************");
    interface NamedPerson {
        firstName: string;
        //optional argument - may or may not be present
        age?: number;
        //[] notation for property whose names you don't know
        [propName: string]: any;
        //add methods on interfaces
        greet(name: string): void;


    }

    function greet(person: NamedPerson) {
        console.log("Hello " + person.firstName);
    }

    function changeName(person: NamedPerson) {
        person.firstName = "Anna";
    }

    const person = {
        firstName: "Max",
        age: 27,
        hobbies: ["Cooking", "cycling"],
        greet(lastName: string) {
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

    class Person implements NamedPerson {
        firstName: string;
        greet(lastName: string) {
            console.log("In class, I am " + this.firstName + " " + lastName);
        }
    }

    const myPerson = new Person();
    myPerson.firstName = "John";
    console.log(myPerson.firstName);
    myPerson.greet("Wayne");







}
