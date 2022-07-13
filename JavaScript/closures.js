// function along with its lexical scope forms a closure
// A closure is the combination of a function bundled together
// (enclosed) with refereces to its surrounding state(the lexical environment).

// function x(){
//   var a = 7;
//   function y(){
//     console.log(a) // 7
//   }
//   y();
// }
// x();

function x(){
  var a = 7;
  function y(){
    console.log(a) // 7 // reference to a
  }
  return y; // it return y to where the function was invoked 
}
var z = x();  
console.log(z); // [Function: y]

// after y was returned to z x now has been vanished 
// it doesn't exist in the call stack. x execution context 
// is completely gone 
// now our z contain the function y

//....
z();
if we try to execute z becuase it contains y and inside it 
there is console a so it will print 7;

here comes closure in the picture
when they are returned from another function they 
still maintains their lexical scope. They rememeber where they were actually present.

when the function y was returned it means the closure was returned
the binding of the y function along with its lexical scope so its still remember a 

Function along with its lexical scope bundles together 
forms a closure. 


function x(){
  var a = 7;
  function y(){
    console.log(a) // 100 // reference to a
  }
  a = 100;
  return y; 
}
var z = x();  
z(); // 100 output


function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log("a", a, "b", b); // a - 100, b = 900 // reference to a
    }
    a = 100;
    y();
  }
  x();
}
z();

// use of closures :->
Module Design pattern 
currying 
function like once 
memoize 
maintaining state in async world 
setTimeouts 
iterators


// setTimeout + Closures

function x(){
  var i = 1;
  setTimeout(function(){  // this callback function remembers reference to i 
    console.log(i);      
  }, 3000);
  console.log("Himanshu")
}
x();

setTimeout take that callback function attach timer of 3 sec to it 
and javascript contines to run it doesn't wait 😉
once that timer expires it takes that function puts it again to the call stack and runs it 