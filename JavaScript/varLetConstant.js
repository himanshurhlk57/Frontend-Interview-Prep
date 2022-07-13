// Akshay saini
let and const are also hoisted same as var

window = global object(in case of browser)

console.log(a); // can't access before initialization
let a = 10;

console.log(b); // undefined
var b = 10;

In hositing stage b is in the global space declared with var 
whereas a is in the script both having value undefined

in case of let and const they are also allocated memory i.e hoisting
but they are stored in the different memory space and you can't 
access this memory space before you have put memory in them

let and const are attached to seperate space i.e reserved space of let 
and const 

temporal deadzone is the time since when this let variable was hoisted and 
till it is initilaized some value;

when the variable are in the temporal deadzone you can't 
access them it will give you reference error
You can only access them when some value is initilaize to it.

{} known as block also compound statement 
use to group multiple statements or wraps multiple statment 
and now using {} we can use group of statement where it expect single statement 
i.e after if, if(){}

if(true) console.log(true) if expects only a single statement 
but what if we want to use multiple statement in that case we can make use of {}
if(true){
	console.log(true);
	console.log(true1);
}

{
	var a = 10;
	let b = 20;
	const c = 30;
}
console.log(a) // 10
console.log(b) // b is not defined
console.log(c)

variable with let and const are hoisted in different memory space i.e block memory and assigned undefined
whereas var is hosited in global memory and assigned undefined

let and const are block scope and you can't access let and const outside the block 
whereas you can access var ooutside block also


// shadowing in javaScript

var a = 100;
{
var a = 10;
let b = 20;
const c = 30;
console.log(a) // 10 a value is comming from line 61 and not from 59
console.log(b) // 20
console.log(c) //30
}
console.log(a) // 10 again a was shadowed and its value has also been modified from 100 to 10
because a is declared with var keyboard it is in the global space 
so its value has been modified and both the console are referring to the same memory space i.e global space 

let b = 100;
{
	let b = 20;
	console.log(b) // 20;
}
console.log(b) // 100;
now b is in the two different scope one in the block scope 
where b value is 20 and one in the other scope i.e script where its value is
100

shadowing work same in case of functional scope too 

const c = 100;
function x(){
	const c = 30;
	console.log(c) // 30
}
console.log(c) // 100

var is a functional scope and let and const are block scope

// Illegal shadowing
let a = 20;
{
	var a = 20; // illegal shadowing
}

let a = 20;
function x(){
	var a = 20; // legal shadowing
}

var a = 20;
{
	let a = 20; // valid shadowing
}

const a = 20;
{
	const a = 100;
	{
		const a = 200;
		console.log(a); // 200
	}
}

const a = 20;
{
	const a = 100;
	{
		console.log(a); // 100
	}
}

All the scope rule that work in the function work exactly in 
the arrow function also

// Code with simran
Whatever variable you declare inside a function belongs to that function
Any variable declared with var keyboard is function scoped

function scoped

function displayAge(){
	var age = 24;
}
displayAge();
console.log(age); // age is not defined

//Block scope
if(true){
	var name = 'simran';
}
console.log(name);
//output simran accesible outside the curly braces
variable declared with var keyboard are not block scope
If the variable with var keyboard is not declared inside a function then it is a global variable

var is function scope
whereas let and const are blocked scope any variable declared with let and const is actually a blocked scope


Arrow function
// When we try to console this inside the arrow function it will print window because arrow function doesnt have their execution context so this points to its parent execution context i.e window.

// Let and Const are blocked scope.
// The variable inside the blocked scope i.e { }
// are only accesible inside the curly braces not outside it.
// 
// var is function scope
// Let and const are block scope
// If we declare any variable using const then we cant change the value of that variable

// If the var is not declared inside the function scope then its get assigned to window object.
// var product = 19;
// window.product will give us 19;



function register(){
	var username = 'rakesh';
	var password = 'secret';
}
console.log(username);
// not accesible outside the function scope 


var age = 18;
if(age >= 18){
	let driving = true;
}

console.log(driving); 
// Driving not accesible outside the if block


const age = 19;
age = 20;
//We cant do this


const age = {
	year: 19,
};

age.year = 20;
console.log(year); // 20
We can do this here age is a object








