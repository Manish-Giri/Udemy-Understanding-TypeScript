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
        hobbies: ["Cooking", "cycling"]
    };

    //object literals are checked more strictly in TS
    greet(person);
    //greet({firstName: "Max", age: 29});
    changeName(person);
    greet(person);







}
