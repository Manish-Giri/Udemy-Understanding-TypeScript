/**
 * Created by manishgiri on 10/31/16.
 */
namespace section5 {

    //classes
    class Person {
        name: string;
        private type: string; //private members are accessible only within the class
        protected age: number = 23; //private members are accessible from within class and subclass

        //constructor is optional in TS
        constructor(name: string, public userName: string) {
            //userName -> this is another way of assining properties through constructor, without having to first declare
            //the property and then assign value through constructor
            this.name = name;
        }

        printAge() {
            console.log(`Age = ${this.age}`);
        }

        setType(type: string) {
            this.type = type;
            console.log(`Type = ${this.type}`);
        }

    }

    let person1 = new Person("John Doe", "jdoe");
    console.log(person1);
    person1.printAge();
    person1.setType('Cool guy');
    console.log(person1);

    class SubPerson extends Person {
        name = "Max"; //this name overrides any name passed in thru constructor

    }

    let subPerson1 = new SubPerson("Anna", 'maxs');
    console.log(subPerson1);

    //GETTERS and SETTERS

    class Plant {
        private _species: string = "hibiscus";

        //getter
        get species() {
            return this._species;
        }

        //setter
        set species(name: string) {
            if(name.length > 3) {
                this._species = name;
            }
            else {
                this._species = "hibiscus";
            }
        }
    }

    let plant = new Plant();
    console.log(plant.species);
    plant.species = "green plant";
    console.log(plant.species);
    plant.species = "gr";
    console.log(plant.species);

    //-------------------------------
    //STATIC
    class Helpers {
        static PI: number = 3.141;
        static calcCircumference(diameter: number): number {
            return this.PI * diameter;
        }
    }

    console.log(Helpers.PI);
    console.log(Helpers.calcCircumference(4.5));

    //-------------------------------
    //ABSTRACT CLASSES/METHODS
    abstract class Project {
        projectName: string = "Default";
        budget: number = 1000;
        //abstract methods dont have body
        abstract changeName(name: string): void;
        calcBudget(): number {
            return this.budget * 2;
        }
    }

    class ITProject extends Project {
        changeName(name: string): void {
            this.projectName = name;
        }
    }

    let newProject = new ITProject();
    console.log(newProject);
    newProject.changeName("Project Quarter-4");
    console.log(newProject);





}
