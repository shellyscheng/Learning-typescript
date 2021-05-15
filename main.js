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
//Typescript types
var a;
var b;
var c;
var d;
var e; //array of numbers or let e: number[] = [1, 2, 3];
var f = [1, true, 'a', false]; //not good practice, but it's possible
//enumeration
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
