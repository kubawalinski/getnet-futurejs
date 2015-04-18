//example from https://reinteractive.net/posts/235-es6-classes-and-javascript-prototypes
class Vehicle {
    constructor(name) {
        this.kind = 'Vehicle';
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

class Car extends Vehicle {
    constructor(name) {
        super(name);
        this.kind = 'Car';
    }
}

var mazda = new Car('Mazda');

console.log(mazda.kind); //Car
mazda.printName(); //Mazda

console.log(mazda.hasOwnProperty('name'));
//true
console.log(mazda.hasOwnProperty('printName'));
//false
console.log(mazda.__proto__.hasOwnProperty('printName'));
//false
console.log(mazda.__proto__.__proto__.hasOwnProperty('printName'));
//true

var mazda = new Car('Mazda');
var bmw = new Car('BMW');

console.log(mazda.__proto__ == bmw.__proto__);
// true

mazda.__proto__.printName = () => console.log('Oops');

bmw.printName(); //Oops
mazda.printName(); //Oops
var honda = new Car('Honda');
honda.printName(); //Oops

delete mazda.__proto__.printName;

bmw.printName(); //BMW
mazda.printName(); //Mazda
honda.printName(); //Honda
var ford = new Car('Ford');
ford.printName(); //Ford