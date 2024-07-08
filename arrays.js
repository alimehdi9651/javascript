// arrays in javascript are one of the type of objects(advanced datatype).
// witch contain "indices(as key) : value pair".


// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);

// // let array = ["ali", 64, 'a']; //not a good approch of array declaration

// arr[2] = 5 // we can any element of array
// console.log(arr);


let avg = 0
let arr = [5, 5, 5, 5];
for(let el of arr){
    avg += el    
}
console.log(avg/4);