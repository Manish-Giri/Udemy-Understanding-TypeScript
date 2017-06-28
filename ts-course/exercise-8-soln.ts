/**
 * Created by manishgiri on 6/27/17.
 */

namespace exercise8 {

    // create Map class
    class MyMap<T> {
        private map: {[key: string]: T} = {};

        setItem(key: string, item: T) {
            this.map[key] = item;
        }

        getItem(key: string): T {
            return this.map[key];
        }

        clear() {
            this.map = {};
        }

        printMap() {
            for(let key in this.map) {
                console.log(`${key}: ${this.map[key]}`);
            }
        }
    }

    // numbermap
    const numberMap = new MyMap<number>();
    numberMap.setItem("zombies", 5);
    numberMap.setItem("doges", 10);

    console.log(numberMap.getItem("doges"));
    numberMap.printMap();
    numberMap.clear();
    numberMap.printMap();

    // string map


}
