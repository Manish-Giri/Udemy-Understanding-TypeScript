/**
 * Created by manishgiri on 11/26/16.
 */
var section7;
(function (section7) {
    function greet(person) {
        console.log("Hello " + person.firstName);
    }
    function changeName(person) {
        person.firstName = "Anna";
    }
    var person = {
        firstName: "Max",
        age: 27
    };
    greet(person);
    changeName(person);
    greet(person);
})(section7 || (section7 = {}));
