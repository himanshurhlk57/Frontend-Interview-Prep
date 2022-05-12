//Akshay
function a(){
	var b = 10;
	c();
	function c(){
		console.log(b) // 10;
	}
}
a();
console.log(b) // not defined

lexical environment is created Whenever a execution 
context is created.
 lexical environment is the local memory + reference to 
 the lexical environment of its lexical parent 
 where the function actually sits inside the code 
 c sits inside the a so c lexical parent is a and 
 a lexical parent is global execution context becuase 
 its sits inside gec and gec le is null 
 
 and the whole chain of this lexical environment is scope chain 
 

// simran
Lexical -> where in the code it is defined and not where we are calling it

var name = 'simran';

function displayName(){
	var age = 23;
	console.log(name);
	function displayAge(){
		console.log(age);
	}
	displayAge();
}
displayName();

In the GEC
name: 'simran'
displayName: fn()

in the displayName Execution Context
age: undefined
displayAge: fn()

And inside the displayAge execution context there 
is not any variable

displayAge will have reference to the lexical environment
 of displayName

Whenever your function is trying to access any variable 
if it is not present in the local memory of that function
 it will try to look in the local memory of its lexical parent 
 and again if it is not present then it will look in its lexical 
 parent