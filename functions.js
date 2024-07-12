//METHOD : is a function that is associated with an object and is defined within a class.
// Methods operate on the data contained in the object (instance) or the class itself.

// FUNCTION : function is a block of code designed to perform a specific task or compute a value.
// Functions can be standalone entities or part of a larger program. They can be called
// directly from the global scope or from other functions

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


// function add(a, b){
//     return a+b;
// }

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
// let c=0;
// function no_vowl(str){
//     for(let ch of str){
//         if(ch === 'a' || ch === 'e' ||ch === 'i' ||ch === 'o' || ch === 'u'){
//             c++;
//         }
//     }
//     console.log("Number of vowles are : ",c);
// }
// s = "aeiou";
// no_vowl(s);

// const count_vowl = (str) => {
//     for(let ch of str){
//         if(ch === 'a' || ch === 'e' ||ch === 'i' ||ch === 'o' || ch === 'u'){
//             c++;
//         }
//     }
//     console.log("Number of vowles are : ",c);
// }
// s = "ali mehdi"
// count_vowl(s)



//HIGHER ORDER FUNCTION/METHODS : HOF/HOM are the type of methods that takes any other 
//function as a parameter or returns function as a value 
// only works in array
//HERE, .forEach() IS A TYPE OF HOF/HOM. 

// An important method of arrays is '.forEach()'
//SYNTAX:
//forEach(call back function(value, index, array itself));
// only array is used in this function.
// callback function is a function passed as an argument to another function.
// here, forEach funtion is use to perform any task in each and every element of an array.
// let arr = [1, 2, 3, 4, 5]
// let array = ["ali", "mehdi", "is ", "a", "good"]
// arr.forEach(function print_val(val){
//     console.log(val);
// });
// ------------------------------
// array.forEach(function print_val(val){
//     str1 = val.toUpperCase()
//     console.log(str1);
// });
// -------------------------------
// arr.forEach((val, idx, array)=>{
//     console.log(`${val} at index ${idx}th postion in this array [${array}]`);
// })


// let arr = [1, 2, 3, 4, 5]
// arr.forEach((val) => {
//     console.log(val*val);
// })

// ------------------------------
//Another type of HOF/HOM is ".map(callback function(val, idx, array))""
//it creates a new array with results of some operation. The value its callback returns are used 
// to form a new array. it modify each elements of array

// arr = [1, 2, 3, 4, 5 ]
// newarray = arr.map((val) =>{
//     return val*val;
// })
// console.log(newarray);
// console.log(arr);

// --------------------------------

//Another HOF/HOM is '.filter(callback fun(val))'
// it creates a new array and include only those elements which pass
// filter(condition or any operation) and store them into a new array.
// it modify whole array

// let newarray = arr.filter((val) => {
//     return val %2 == 0;  // Filter or condition
// })
// console.log(newarray);

//------------------------------------
//NEXT HOF/HOM is '.reduce(previous , current);'
//it take two parameters prev is 1st idx and curr is next idx after prev.
//when we have to peform a task, in which we have an array as a input and our operation give us
//a single value then we use reduce fuction such as "finding the sum of array, finding the largest
//element in array or finding average of the elements of array"
// let newarray = arr.reduce((prev , curr) => {
//     return prev + curr;
// })
// console.log("sum of the elements is",newarray);

// let newarray = arr.reduce((prev , curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log("maximum in array is",newarray);


//-----------------------------------------------
// PRACTICE QUESTION
//1.)
// print marks of student of scored more than 100:
// let arr = [64, 87, 90, 100, 65, 99]
// let newarray = arr.filter((marks) =>{
//     return marks >= 90;
// })
// console.log(`Marks greater 90 = ${newarray}`);

// // 2.)  
// let n = prompt("give length of array");
// let arr = [];
// for(let i = 0; i < n; i++){
//     let a = Number((prompt(`enter ${i} value`)))
//     arr[i] = a;
// }
// // console.log(arr);

// let sum = arr.reduce((prev, curr) => {
//     return prev + curr;
// })
// console.log(`sum of array = ${sum}`)


