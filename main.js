function log(messageExample) {
    console.log(messageExample);
}
var messageExample = "Hello World";
log(messageExample);
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
let a;
let b;
let c;
let d;
let e; //array of numbers or let e: number[] = [1, 2, 3];
let f = [1, true, 'a', false]; //not good practice, but it's possible
//enumeration
//Number is optional, but better practice
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
let backgroundColor = Color.Red;
//Type Assertion, won't change object in memory
let message;
message = 'abc';
let endsWithC = message.endsWith('c'); //more common
let alternativeWay = message.endsWith('c');
//Arrow function
let doLog = (message) => console.log(message);
//custom types in typescript
//Capitalize P: Pascal naming convention
//in interface, we can't have implementation, only signature of a function
// interface Point {
//     x: number,
//     y: number,
//     draw: () => void 
// }
//Apply cohesion principle, change interface to class
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    //method
    draw() {
        console.log('X: ' + this.x + ', Y:' + this.y);
    }
}
//Object of customize group, needs explicity allocate memory to it
let point = new Point(1, 2);
point.draw();
