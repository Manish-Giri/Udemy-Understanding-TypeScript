var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by manishgiri on 11/23/16.
 */
var exercise5;
(function (exercise5) {
    //exercise 1
    var Car = (function () {
        function Car(name, acceleration) {
            if (acceleration === void 0) { acceleration = 0; }
            this.name = name;
            this.acceleration = acceleration;
        }
        Car.prototype.honk = function () {
            console.log("Toooooooooot!");
        };
        Car.prototype.accelerate = function (speed) {
            this.acceleration += speed;
        };
        return Car;
    }());
    var car = new Car("BMW");
    console.log(car);
    car.honk();
    console.log(car.acceleration);
    car.accelerate(10);
    console.log(car.acceleration);
    console.log("*****************");
    //exercise 2
    var BaseObject = (function () {
        function BaseObject() {
            this.width = 0;
            this.length = 0;
        }
        return BaseObject;
    }());
    var Rectangle = (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            _super.apply(this, arguments);
        }
        Rectangle.prototype.calcSize = function () {
            return this.width * this.length;
        };
        return Rectangle;
    }(BaseObject));
    var rect = new Rectangle();
    rect.width = 5;
    rect.length = 10;
    console.log(rect.calcSize());
    console.log("*****************");
    //exercise 3
    var Person = (function () {
        function Person() {
            this._firstName = "";
        }
        Object.defineProperty(Person.prototype, "firstName", {
            //get
            get: function () {
                return this._firstName;
            },
            //set
            set: function (val) {
                if (val.length > 3) {
                    this._firstName = val;
                }
                else {
                    this._firstName = "";
                }
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var person = new Person();
    console.log(person);
    console.log(person.firstName);
    person.firstName = "Jo";
    console.log(person.firstName);
    person.firstName = "John";
    console.log(person.firstName);
})(exercise5 || (exercise5 = {}));
