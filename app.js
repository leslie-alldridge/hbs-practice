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
