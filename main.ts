function log(message) {
    console.log(message);
}

var message = "Hello World";
log(message)


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