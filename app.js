//CHECK TO MAKE SURE HTML LINKED
console.log('Hello World');
//CREATE VARIABLE FOR FIRST NAME
var firstname = 'kimani';
console.log(firstname);
//CREATE CONSTANT FOR NUMBER OF STATES
const states = 50;
console.log(states);
//ADD X + Y
var x = 5;
var y = 4;

var addedsum = (x+y);
console.log(addedsum);


// Write some code so that if your name starts with a letter after L, you display an alert that says "Back of the line!". Otherwise, you should display an alert that says "Next!".
var firstChar = firstname.charCodeAt(0);
var hexl = 'l'.charCodeAt(0);


if (firstChar >= hexl) {
console.log('Back of line')

} else {

console.log('next')
}

//Create a function that says hello world
var hello = 'hello';
var world = ' world';


console.log(sayhello(hello, world));

function sayhello(hello,world){
    return hello + world;
}

//Check Age Function
var name1 = 'kimani';
var age1 = (2018-1980);
var name2 = 'Charles';
var age2 = (21);
var name3 = 'Abby';
var age3 = (27);
var name4 = 'James';
var age4 = (18);
var name5 = 'John';
var age5 = (17);

(checkage(age1,name1));
(checkage(age2,name2));
(checkage(age3,name3));
(checkage(age4,name4));
(checkage(age5,name5));

function checkage(age,name){
    if (age < 21) {
        console.log('Sorry ' + name + ' you are not old enough to view this page');  
    }
} 
