/**
 * Created by manishgiri on 11/28/16.
 */
namespace section8 {
    // simple generic
    function echo(data: any) {
        return data;
    }

    console.log(echo("Max"));
    console.log(echo(27));

    // better generic
    function betterEcho<T>(data: T) {
        return data;
    }

    console.log(betterEcho("John"));
    console.log(betterEcho(27));

    let testResults: Array<number> = [1, 2, 4];
    testResults.push(10);
    // error
    // testResults.push("one");

    console.log(testResults);
}
