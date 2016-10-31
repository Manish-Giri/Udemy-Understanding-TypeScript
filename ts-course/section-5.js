/**
 * Created by manishgiri on 10/31/16.
 */
var section5;
(function (section5) {
    //classes
    var Person = (function () {
        //constructor is optional in TS
        function Person(name, userName) {
            this.userName = userName;
            //userName -> this is another way of assining properties through constructor, without having to first declare
            //the property and then assign value through constructor
            this.name = name;
        }
        return Person;
    }());
    var person1 = new Person("John Doe", "jdoe");
    console.log(person1);
})(section5 || (section5 = {}));
