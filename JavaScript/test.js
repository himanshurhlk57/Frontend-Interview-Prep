// console.log(x);
// console.log(getName);

// var x = 7;
// var getName = () => {}

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }
// function b() {
//   var x = 100;
//   console.log(x);
// }

// var x = 1;
// a();
// b();
// console.log(x);

// var a = () => {
//   var x = 10;
//   console.log(x);
// }
// var b = () => {
//   var x = 100;
//   console.log(x);
// }

// a and b are not function they are treated as normal variable
// and in the gec undefined value are assigned to it also.
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
// console.log(z); // [Function: y]
