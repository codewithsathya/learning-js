//variables
let myName = "Sathya";
console.log(myName);
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen (-)
// Case sensitive

let firstName = "Sathiya", lastName = "Sivaraj";

//Primitive data types: string, number, boolean, undefined, null
let name = "Sathya"; // String literal
let age = 30; // Number literal
let isApproved = true; // Boolean literal
let height = undefined; 
let selectedColor = null;

//reference data types: Object, Array, Function
//Object
let person = {
    name: "John",
    age: 30
}
////Dot notation
person.name = "David";
console.log(person.name);

////Bracket notation
person['name'] = "sathya";
console.log(person['name']);
    //or
let x = 'name';
person[x] = "Rahul";
console.log(person[x]);

//Arrays
let selectedColors = ['red', 'blue', true];
selectedColors[3] = 1;
console.log(selectedColors[3]);
console.log(selectedColors.length);

//Functions
//Performing a task
function greet(name, age) {
    console.log("hello" + name + ' ' + age);
}
greet("Sathya", 19);
greet("Sandhya", 18);

//Calculating a value
console.log(square(4));
function square(number) {
    return number * number;
}
let number = square(9);
console.log(number);
    //or
console.log(square(9));