const circle = {
    radius: 1,
    draw() {
        console.log("Draw");
    }
}

for (let key in circle) {
    console.log(key, circle[key]);
}

// for (let key of circle) {
//     console.log(key)
// }
// The above code produce error
// Because object are not iterable


for (let key of Object.keys(circle))
    console.log(key, circle[key]);

for (let entry of Object.entries(circle))
    console.log(entry);

if ('radius' in circle) console.log('Yes');

//cloning object
    // const another = {};
    // for(let key in circle)
    //     another[key] = circle[key];
            //or
    // const another = Object.assign({}, circle);
    // another = Object.assign({
    //     color: 'yellow'
    // }, circle);
            //or
const another = {...circle}; 

//Template literals
let name = 'sandhya';
const message = `This is my 
first message, ${name}`;
console.log(message);




