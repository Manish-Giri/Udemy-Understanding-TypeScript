/**
 * Created by manishgiri on 11/26/16.
 */
namespace section7 {
    //interfaces

    console.log("INTERFACES");
    console.log("****************************");
    interface NamedPerson {
        firstName: string;

    }

    function greet(person: NamedPerson) {
        console.log("Hello " + person.firstName);
    }

    function changeName(person: NamedPerson) {
        person.firstName = "Anna";
    }

    const person = {
        firstName: "Max",
        age: 27
    };

    greet(person);
    changeName(person);
    greet(person);
}