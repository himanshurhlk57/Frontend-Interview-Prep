It creates a global execution context and alocate the memory 
to all the variable and function even before executing a 
single line of code 

undefined is a special keyboard its take up it own memory 
like a placeholder which is kept for the timebeing until 
the variable is assigned some other value.

var a;
console.log(a); // undefined 

JavaScript is a loosely type language or weakly type means it doesnot 
attaches its variables to any specific data type. 

var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
a = "Hello"
console.log(a); // Hello