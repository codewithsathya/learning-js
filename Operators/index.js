
//Arithmetic
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(x++);//10
x--;
console.log(++y);//4
y--;

//Assignment operator
x = 7;
x++; //equivalent to x = x + 1;
x += 3; //Similar for other operators

//Comparision or relational operators
x = 1;
console.log(x > 0);
console.log(x >= 1);

//Equality operators
////Strict equality (Type + value)
console.log(1 === 1); //true
console.log('1' === 1); //false
console.log('1' === '1'); //true

//loose equality (value)
console.log(1 == 1); //true
console.log('1' == 1); //true
console.log(1 == '1'); //true
console.log(true == 1); //true

//ternary operator
let points = 110;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);

//logical operator
//AND (&&)
console.log(true && true); //true
console.log(false && true); //false
x = 10;
console.log(false && x++); //increment don't happen
console.log(x); //10

//OR (||)
console.log(true || false);
x = 10;
console.log(true || x++); //increment don't happen
console.log(x); //10

//NOT (!)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused); //true

//Logical operator with non booleans
console.log(false || 'Mosh'); //'Mosh'
console.log(false && 'Mosh'); //false
console.log(false || 1 || 2); //1
console.log('sandhya' || 'sneha'); //sandhya
console.log('sandhya' && 'sneha'); //sneha
//false || 1 --> //1
////Falsy (false)
//undefined
//null
//0
//false
//''
//NaN

////Truthy (true)
//Remaining all

//Bitwise operator
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
console.log(1 | 2); //R = 00000011 = 3
console.log(1 & 2); //R = 00000000 = 0
console.log(1 & 3); //R = 00000001 = 1


 