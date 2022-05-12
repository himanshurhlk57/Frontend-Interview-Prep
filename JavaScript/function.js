1 ->

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}

output:-> 
10
100
1

GEC 
[ Memory   Code  ]

firstly the gec is created and pushed to the stack 
and in the next line if there's any function call then 
its seperate execution context is created and pushed to the 
stack after it finish executing its execution context is popped 
from the stack and lastly after every line of program in 
js finish executing the global execution context is 
also popped out from the stack. 

whenever you create a execution context whether a global or 
function execution context a this keyboard is created along with it 
and at global level this points to the global object i.e the window 
in case of a browser.

Global object i.e window in case of browser 

Anything which is not inside any function is the global space

Global execution context will be created in the creation phase
undefined value will be assigned to x then the 
a function will be invoked its own execution context 
will be created and in the creation phase undefined value 
will be assigned to function a x. In the execution phase
10 will be assigned to x. That x value is bind under 
a function execution context so 10 value will be printed in console 
after that same will be happen for b.
Then javascript will reach at console.log(x) at line 6 
at will assign 1 value to it 
so the output to the console is 10 then 100 then 1

var a  = 10;
function b(){
    var x = 10;
}

console.log(window.a)
console.log(a)
console.log(this.a)

all three are referring to the same space i.e in the global object 
in the window.

// functions are also objects in JS

// Callbacks are functions that are passed as arguments to another function


// 1-  Callback

function computeAndPrint(firstNum, secondNum, func) {
    console.log(func(firstNum, secondNum));
}

function add (firstNum, secondNum) {
    return firstNum + secondNum;
}

computeAndPrint(42, 5, add); //47


2 -> Question in different way of writing the function

// function which takes 3 numbers (principal, rate and time) and returns its SI.
// SI = (principal*rate*time)/100
// Assign the unnamed function to a variable name simpleInterest.
// Call simpleInterest and print the returned value for the following values:
// 10000, 5, 12
// 200000, 10, 8
// 15000, 14, 2



// i -> Using unnamed function

const simpleInterest = function(principal, rate, time){
	const SI = (principal * rate * time)/100;
	return SI;
}

console.log(simpleInterest(10000, 5, 12));
console.log(simpleInterest(200000, 10, 8));
console.log(simpleInterest(15000, 14, 2));

// ii -> Using arrow function
// Arrow function is a modern way to create functions and make the code much shorter

const simpleInterest = (principal, rate, time) => {
	const SI = (principal * rate * time)/100;
	return SI;
}

console.log(simpleInterest(10000, 5, 12));
console.log(simpleInterest(200000, 10, 8));
console.log(simpleInterest(15000, 14, 2));

// iii-> If the function has only one statement (which is also the return statment) then we can shorten it further like this:

const simpleInterest = (principal, rate, time) => (principal * rate * time)/100;

console.log(simpleInterest(10000, 5, 12));
console.log(simpleInterest(200000, 10, 8));
console.log(simpleInterest(15000, 14, 2));

// iv - > In case a single paramter is in function we can write

const increment = num => num + 1;


















function computeAndPrint(firstNum, secondNum, func) {
    console.log(func(firstNum, secondNum));
}

function add (firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract (firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply (firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide (firstNum, secondNum) {
    return firstNum / secondNum;
}

computeAndPrint(42, 5, add); //47
computeAndPrint(42, 5, subtract); //37
computeAndPrint(42, 5, multiply); //210
computeAndPrint(42, 5, divide); //8.4

// We can even pass the function directly:

computeAndPrint(42, 5, function modulus(firstNum, secondNum) {
    return firstNum % secondNum;
}); //2


// We've learned that we can write functions like this:

function func(firstNum, secondNum) {
    return firstNum + secondNum;
}

const add = func;

// If we can create an add function by assigning another function to it, we can in fact write the above code directly like this:

const add = function func(firstNum, secondNum) {
    return firstNum + secondNum;
}

// Here, we are assigning a function named func to another function add. If we want that every caller should directly call the add function instead of the func function, there is no need to have the name func as well. We can remove the function name and rewrite the above code as:

const add = function(firstNum, secondNum) {
    return firstNum + secondNum;
}

// This is known as an unnamed function whereas the one with a function name is called a named function.