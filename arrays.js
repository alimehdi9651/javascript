// arrays in javascript are one of the type of objects(advanced datatype).
// witch contain "indices(as key) : value pair".


// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);

// // let array = ["ali", 64, 'a']; //not a good approch of array declaration

// arr[2] = 5 // we can any element of array
// console.log(arr);

// average of five marks

// let avg = 0
// let arr = [5, 5, 5, 5];
// for(let el of arr){
//     avg += el    
// }
// console.log(avg/4);


// 10% discount

// let price = [80, 100, 98, 76, 300]
// for(let i = 0; i<price.length; i++){
//     price[i] -= (price[i] * (10/100));
// }
// console.log(price);


// ARRAY METHODS
// 1. PUSH(): This methods is as similar to append in pyhton
// it simply add one element or more than one element in a list
// price.push(34, 56, 76);
// // console.log(price);

// // POP(): this function only delete a element from the end of the list and "returns" it.
// price.pop();
// console.log(price);
// let popelement = price.pop();
// console.log(popelement);
// console.log(price);

// TOSTRING(): this method convert array into string
// concat() : this use to mearge two arrays
// unshift(): it works just reveare as puch() method , it add any element at the starting of the array
// shift(): it works just reveare as pop() method , it delete any element at the starting of the array ant returns it.
// slice(): it works as substring() method of string.
// new method
// -->SPLICE(): this method can add,delete and replace element from a list.
// SPLICE(startIndex, delete count, newelement)
// let arr = [1, 2, 3, 4, 5];
// // arr.splice(2 ,1, 6) // replace
// // console.log(arr);
// // arr.splice(2, 0, 6); // add : a element on a particular index
// // console.log(arr);
// arr.splice(2,1);
// console.log(arr); // delete any element

//WINDOW object: it represent a open window in a brower. it is browser's object (not javascript's object)
//its automatically created in the brower.
//its a global object with lots of properties and methods.

