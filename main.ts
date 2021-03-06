import { Point } from './point';

function log(messageExample) {
    console.log(messageExample);
}

var messageExample = "Hello World";
log(messageExample)


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
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[]; //array of numbers or let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false]; //not good practice, but it's possible


//enumeration
//Number is optional, but better practice
enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Red;


//Type Assertion, won't change object in memory
let message;
message = 'abc';

let endsWithC = (<string>message).endsWith('c'); //more common
let alternativeWay = (message as string).endsWith('c');


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




//Object of customize group, needs explicity allocate memory to it
let point = new Point(1, 2);
let x = point.x;
point.x = 10;
console.log(point.x);

//property looks like a field from outside, but is like a method in the class (getter, setter, or a combination of both)