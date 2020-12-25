
//Function declaration
function walk() {
    console.log('walk');
}

//Function expression
let run = function() {
    console.log('run');
};

//Arguments in function
function sum() {
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));

//rest operator
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

function total(discount, ...prices) {
    const total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
}
//*Cannot add parameter after rest parameter

//Default parameters
function interest (principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

//Getters and setters
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';
console.log(person);

//Error handling
const person1 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if(typeof value !== 'string')
            throw new Error('Enter a valid name');
        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person1.fullName = '';
    console.log(person1);
}catch(e) {
    console.log(e.message);
}

//Local vs Global scope
if (true) {
    let message = 'hi';
}
// console.log(message); //produces error

const color = 'red';
function start() {
    const color = 'blue';
    console.log(color); //Output is blue
}
start();

//Let vs Var
function state() {
    for (var i = 0; i < 5; i++)
        console.log(i)
    console.log(i); //i is accessible globally
}

//*var attaches variable to window object in browser where 'let' doesn't

//this keyword
//*In method this --> object
//*In function, this --> global(window, global);
//*In Constructor, this --> object created
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function make() {
    this.color = 'red';
    console.log(this);
}

function Video(title) {
    this.title = title;
    console.log(this);
}

//changing the value of this
//we can create reference to 'this' in method and use
//it in function of method to avoid refering this to global
const movie = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); //Here this refers to global
            //but refers to object if use arrow function as callback function
        });
    }
}

//using call, apply and bind method
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Mosh'}, 1, 2);
playVideo.apply({ name: 'Mosh'}, [1, 2]);
const fn = playVideo.bind({name: 'Mosh'});

