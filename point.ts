//Apply cohesion principle, change interface to class
//private: access modifier. No longer accessible outside the class
export class Point {
    //optional parameter, parameter on the right side of ? should also be ?
    constructor(private _x?: number, private _y?: number) {
    }
    
    //method
    draw() {
       console.log('X: ' + this._x + ', Y:' + this._y)
    }

    //get and set property 
    //getter
    get x() {
        return this._x;
    }

    //setter
    set x(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }

        this._x = value;
    }
}

