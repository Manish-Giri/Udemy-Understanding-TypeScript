/**
 * Created by manishgiri on 6/28/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var section9;
(function (section9) {
    // Decorators
    function logger(constructorFn) {
        console.log(constructorFn);
    }
    var Person = (function () {
        function Person() {
            console.log(this.name);
        }
        return Person;
    }());
    Person = __decorate([
        logger
    ], Person);
})(section9 || (section9 = {}));
