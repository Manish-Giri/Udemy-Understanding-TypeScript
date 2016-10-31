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
            this.age = 23; //private members are accessible from within class and subclass
            //userName -> this is another way of assining properties through constructor, without having to first declare
            //the property and then assign value through constructor
            this.name = name;
        }
        Person.prototype.printAge = function () {
            console.log("Age = " + this.age);
        };
        Person.prototype.setType = function (type) {
            this.type = type;
            console.log("Type = " + this.type);
        };
        return Person;
    }());
    var person1 = new Person("John Doe", "jdoe");
    console.log(person1);
    person1.printAge();
    person1.setType('Cool guy');
    console.log(person1);
})(section5 || (section5 = {}));
