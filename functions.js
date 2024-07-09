// FUNCTION : block of code that reduce redanduncy.
// SYNTAX or FUNCTION DECLERATION :
// function fun_name(msg){    "msg"==>PARAMETER
//     ----------
//     ----------
//     ----------
// }


// SYNTAX OF FUNCTION CALLING OR INVOKE.
// fun_name(anything)   this "anything" is argument 

// function print_str(msg){
//     console.log(msg);
// }

// print_str("hi")


function add(a, b){
    return a+b;
}

// console.log(add(6, 8));


// arrow function : these are the part of modern javascript.
// const fun_name = (work of fun) => {
//     -------
//     -------
// }

// arrow function of add()

// const sum = (a, b) => {
//     return a+b;
// }
// console.log(sum(5,10));

// const upCase = (str) => {
//     return str.toUpperCase();
// }

// console.log(upCase("i am ali"));


// print number of vowels
let c=0;
function no_vowl(str){
    for(let ch of str){
        if(ch === 'a' || ch === 'e' ||ch === 'i' ||ch === 'o' || ch === 'u'){
            c++;
        }
    }
    console.log("Number of vowles are : ",c);
}
s = "aeiou";
console.log(no_vowl(s));