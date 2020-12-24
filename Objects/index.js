// Object-oriented programming (OOP)

const cirle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    // draw: function() {
    //     console.log('Draw the circle');
    // }
            //or
    // draw() {
    //     console.log('Draw the circle');
    // }
            //or
    draw: () => {
        console.log('Draw the circle');
    }
}
cirle.draw(); // Method
//*We have to duplicate this to create another circle

// Factory function
function createCircle(radius) {
    return {
        // radius: radius,
            //or
        radius,
        draw() {
            console.log("Draw the circle");
        }
    };
}

const circle1 = createCircle(2);
circle1.draw();

// Constructor function
function Circle(radius)  {
    this.radius = radius;
    this.draw = function() {
        console.log("Draw the circle");
    }
}
//*Arrow function doesn't work in constructor function

const circle2 = new Circle(5);
circle2.draw();

//Objects are dynamic
const triangle = {
    height: 8
}
triangle.width = 10;
triangle.draw = function() {
    console.log("Draw the triangle");
}
console.log(triangle);
//For deletion of properties and methods
delete triangle.width;
delete triangle.draw;
console.log(triangle);

//Constructor property
let x = {}; //new Object(); --> built-in constructor
x = ''//"" or `` //new String();
x = true // new Boolean();
x = 3 //new Number();

// function is an object!!!
    // function Square(length) {
    //     this.length = length;
    //     this.draw = () => {
    //         console.log("Draw the square");
    //     }
    // }
    // above code can be written as
let Square = new Function('length', `
    this.length = length;
    this.draw = () => {
        console.log("Draw the square");
    }
`);

let square = new Square(8);
square.draw();