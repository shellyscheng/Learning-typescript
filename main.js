function log(message) {
    console.log(message);
}
var message = "Hello World";
log(message);
//in JS, the scope of var variable declared is the nearest function
//tsc complied TS in ES5 JS
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally:" + i);
}
doSomething();
