class Person {
    constructor (firstName = 'Anonymous', age = 0) {
        this.name = firstName;
        this.age = age;
    }
    getGreeting () {
        return `Hello ${this.name}!`;
    }
    getDescription () {
        return `${this.name} is ${this.age} years old`;
    }
    toString () {
        return JSON.stringify(this);
    }
}

let me = new Person('Dustin'),
    notMe = new Person();

console.log(me);
console.log(notMe);
console.log(me.getGreeting());

console.log({age: 33}.toString());
console.log(me.toString());

let cloneMe = new Person('Dustin', 29);
let emptyObject = new Person();
console.log(cloneMe.getDescription());
console.log(emptyObject.getDescription());

class Child extends Person {
    constructor (name, age, interest) {
        super(name, age);
        this.interest = interest;
    }
    getGreeting () {
        return `${this.name} thinks ${this.interest} is fun!`
    }
}

let myChild = new Child('Jim', 30, 'frozen waterfall climbing');
console.log(myChild.getGreeting());