// "use strict"// this line convert the code into strict mode.
// this keyword: it behave differently in every js runtime enviroment 
// this keyword represent global object i.e Window object in browser and global in node.js
//it behaves differently in strict mode and non-strict mode
// inside a function value this keyword dipends on strict mode and non-strict mode. In strict mode's Function value of this 
//will be undifined and in non-strict's funtion it will be window object
//in non-strict mode, there is something in js called this-substitution, Which says if the value to this is null or undefined then
// it will relace by window object in non-strict mode




// this keywod's value also depends upon how the function is called in strict mode.
// function x(){
//     console.log(this);
// }
// // in strict mode:
// x();// if we function without any reference object then value of this will be undefined
// window.x();// and if we call function using reference object then value of this will be window object


// // value of this in a object
// const obj = {
//     a: 20,
//     x: function(){
//         console.log(this);
//     }
// }
// // here inside a method this will give us the whole object
// obj.x();



// IN arrow function :
// arrow function do not provide there own this binding, it retain this value of enclosing lexcical context