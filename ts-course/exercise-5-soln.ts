/**
 * Created by manishgiri on 11/23/16.
 */
namespace exercise5 {
    //exercise 1
    class Car {

        constructor(public name: string, public acceleration: number = 0) {}

        honk(): void {
            console.log("Toooooooooot!");
        }

        accelerate(speed: number): void {
            this.acceleration += speed;
        }
    }

    let car = new Car("BMW");
    console.log(car);
    car.honk();
    console.log(car.acceleration);
    car.accelerate(10);
    console.log(car.acceleration);

    console.log("*****************");
    //exercise 2
    class BaseObject {
        width = 0;
        length = 0;
    }

    class Rectangle extends BaseObject {
        calcSize(): number {
            return this.width * this.length;
        }
    }

    let rect = new Rectangle();
    rect.width = 5;
    rect.length = 10;
    console.log(rect.calcSize());

    console.log("*****************");
    //exercise 3
    class Person {
        private _firstName: string = "";

        //get
        get firstName() {
            return this._firstName;
        }

        //set
        set firstName(val: string) {
            if (val.length > 3) {
                this._firstName = val;
            }
            else {
                this._firstName = "";
            }
        }
    }

    let person = new Person();
    console.log(person);
    console.log(person.firstName);
    person.firstName = "Jo";
    console.log(person.firstName);
    person.firstName = "John"
    console.log(person.firstName);



}

