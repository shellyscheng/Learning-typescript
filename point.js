//Apply cohesion principle, change interface to class
//private: access modifier. No longer accessible outside the class
export class Point {
    //optional parameter, parameter on the right side of ? should also be ?
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    //method
    draw() {
        console.log('X: ' + this._x + ', Y:' + this._y);
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
