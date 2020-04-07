// /* 1. write a closure function to demonstrate addition of parameters passed.
// myClosureDemo(5)(6)(7);    //output should return 18 */

function myClosureDemo(a) {
  return function (b) {
    //outer functions
    return function (c) {
      //local scope
      console.log(a + b + c);
    };
  };
}
myClosureDemo(5)(6)(7);
