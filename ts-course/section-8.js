/**
 * Created by manishgiri on 11/28/16.
 */
var section8;
(function (section8) {
    // simple generic
    function echo(data) {
        return data;
    }
    console.log(echo("Max"));
    console.log(echo(27));
    // better generic
    function betterEcho(data) {
        return data;
    }
    console.log(betterEcho("John"));
    console.log(betterEcho(27));
    console.log("****************************");
    // ARRAYS - GENERICS
    var testResults = [1, 2, 4];
    testResults.push(10);
    // error
    // testResults.push("one");
    console.log(testResults);
    console.log("****************************");
    // GENERIC TYPES
    var echo2 = betterEcho;
    echo2("Hi");
    console.log("****************************");
    // CONSTRAINTS WITH GENERICS
    var SimpleMath = (function () {
        function SimpleMath() {
        }
        SimpleMath.prototype.calculate = function () {
            return +this.baseValue * +this.multiplyValue;
        };
        return SimpleMath;
    }());
    var simpleMath = new SimpleMath();
    simpleMath.baseValue = 10;
    simpleMath.multiplyValue = 20;
    console.log(simpleMath.calculate());
})(section8 || (section8 = {}));
