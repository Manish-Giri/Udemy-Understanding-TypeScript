var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    var SubPerson = (function (_super) {
        __extends(SubPerson, _super);
        function SubPerson() {
            _super.apply(this, arguments);
            this.name = "Max"; //this name overrides any name passed in thru constructor
        }
        return SubPerson;
    }(Person));
    var subPerson1 = new SubPerson("Anna", 'maxs');
    console.log(subPerson1);
    //GETTERS and SETTERS
    var Plant = (function () {
        function Plant() {
            this._species = "hibiscus";
        }
        Object.defineProperty(Plant.prototype, "species", {
            //getter
            get: function () {
                return this._species;
            },
            //setter
            set: function (name) {
                if (name.length > 3) {
                    this._species = name;
                }
                else {
                    this._species = "hibiscus";
                }
            },
            enumerable: true,
            configurable: true
        });
        return Plant;
    }());
    var plant = new Plant();
    console.log(plant.species);
    plant.species = "green plant";
    console.log(plant.species);
    plant.species = "gr";
    console.log(plant.species);
    //-------------------------------
    //STATIC
    var Helpers = (function () {
        function Helpers() {
        }
        Helpers.calcCircumference = function (diameter) {
            return this.PI * diameter;
        };
        Helpers.PI = 3.141;
        return Helpers;
    }());
    console.log(Helpers.PI);
    console.log(Helpers.calcCircumference(4.5));
    //-------------------------------
    //ABSTRACT CLASSES/METHODS
    var Project = (function () {
        function Project() {
            this.projectName = "Default";
            this.budget = 1000;
        }
        Project.prototype.calcBudget = function () {
            return this.budget * 2;
        };
        return Project;
    }());
    var ITProject = (function (_super) {
        __extends(ITProject, _super);
        function ITProject() {
            _super.apply(this, arguments);
        }
        ITProject.prototype.changeName = function (name) {
            this.projectName = name;
        };
        return ITProject;
    }(Project));
    var newProject = new ITProject();
    console.log(newProject);
    newProject.changeName("Project Quarter-4");
    console.log(newProject);
    //-------------------------------
    //PRIVATE CONSTRUCTORS
    var OnlyOne = (function () {
        //private constructor
        function OnlyOne(name) {
            this.name = name;
        }
        //method to set the instance
        OnlyOne.getInstance = function () {
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne("The only one");
            }
            return OnlyOne.instance;
        };
        return OnlyOne;
    }());
    //try to create instance outside - error
    //let wrong = new OnlyOne("only one");
    var right = OnlyOne.getInstance();
    console.log(right);
    //read property name
    console.log(right.name);
})(section5 || (section5 = {}));
