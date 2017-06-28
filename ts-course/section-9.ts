/**
 * Created by manishgiri on 6/28/17.
 */

namespace section9 {
    // Decorators

    function logger(constructorFn: Function) {
        console.log(constructorFn);
    }

    @logger
    class Person {
        name: string;

        constructor() {
            console.log(this.name);
        }
    }
}
