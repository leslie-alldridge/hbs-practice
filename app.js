//sync vs async functions

longRun = (callBack) => {

    setTimeout( () => {
    var x = 0;
    while ( x < 1000000000 ){
        x += 1;
    }
    callBack("yo");
    }, 0);
}

console.log(new Date().getTime())
longRun((msg) => console.log(msg));
console.log(new Date().getTime())

//writing files to system

const fs = require("fs");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

async function main() {
    await writeFile("test4.js",
        "console.log('Hello world with promisify and async/await!');");

    console.info("file created successfully with promisify and async/await!");
}

main().catch(error => console.error(error));