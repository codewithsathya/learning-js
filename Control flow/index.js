//if else
let x = 10;
if(x < 8) {
    console.log("Less than eight");
}else if(x > 30) {
    console.log("Greater than 30");
}else {
    console.log("Greater than 8 and less than 30");
}

//switch
let role = 'guest';
switch (role) {
    case 8:
        console.log(8);
        break;
    case 'guest':
        console.log('Guest user');
        break;
    default:
        console.log('Unknown user');
}

//Loops
//for loop
for (let i = 0; i < 5; i++) {
    console.log('Hello' + i);
}

//while loop
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

//Do while loop
i = 0;
do {
    console.log(i);
    i++;
}while(i <= 5);

//For-in loop
const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person) {
    console.log(key);
}
for (let key in person) {
    console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];
for (let index in colors)
    console.log(index, colors[index]);

//For-of loop (ES6)
for (let color of colors)
    console.log(color); 