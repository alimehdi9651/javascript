
// // promise : Promises is an the Object representing the eventual completion or failer of an asyncrons operation.
// // through promises we get solution for the inversion of control
// // const promise = createOrder(cart);
// // promise.then(function(orderId){
// //     proceedTopayment(orderId);
// // });

// // promises chain: attaching multiple promises to the code
// // createOrder(cart)
// //     .then(function (orderId){
// //         return proceedTopayment(orderId);
// //     });
// //     .then(function(paymentInfo){
// //         return showorersummary(paymentInfo);
// //     });
// //     .then(function(paymentInfo){
// //         return updatewalletBalance(paymentInfo)
// //     });


// // creation of own promises{
// // https://www.youtube.com/watch?v=U74BJcr8NeQ&list=PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID&index=23
// // }
// const cart = ["top", "jeans", "bottom"];
// createOrder(cart)
// .then(function(orderId) {
//     console.log(orderId);
//     return orderId;
// })
// .then(function(orderId){
//     return proceedTopayment(orderId);
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo);
//     return showOrderSummary(paymentInfo); 
// })
// .then(function(summary){
//     console.log(summary);
//     return updateWallet(summary);
// })
// .then(function(walletInfo){
//     console.log(walletInfo)
// })
// .catch(function (err) {
//     console.log(err.message);
// })


// function updateWallet(summary){
//     return new Promise(function(resolve, reject){
//         resolve("Wllate updated successfully");
//     })
// }
// function showOrderSummary(paymentInfo){
//     return new Promise(function (resolve, reject){
//         resolve("this is the summary of your above order");
//     });

// }
// function createOrder(cart){
//     const pr = new Promise (function (resolve, reject){
//         if(!validateCart(cart)){
//             const err = new Error("cart is not valid");
//             reject(err);
//         }
//         const orderId = "12345";
//         if(orderId){
//             resolve(orderId);
//         }
//     });
//     return pr;
// }
// function proceedTopayment(orderId){
//     const pr = new Promise(function(resolve, reject){
//         if(orderId){
//         resolve("Payment done successfully of order number "+orderId);
//         }else{
//             const err = new Error("Above payment was not done successfully")
//             reject(err);
//         }
//     });
//     return pr;
// }
// function validateCart(cart){
//     return true;
// }









//---------------------------------------------------------------------
// // Promise API's:When we have to take parrallel or multiple API calls at a time.
// it takes array as input and return array as out with result.


const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("p1 is success"),3000);
});
const p2 = new Promise((resolve, reject) =>{
    setTimeout(() => reject("p2 is reject"),1000);
});
const p3 = new Promise((resolve, reject) =>{
    setTimeout(() => reject("p3 is rejected"),2000);
});
const promise = [p1, p2, p3]; // array of promisses.

// 1.) Promise.all(): 
// Wait for each api call and then it return result.
// As soon as one of the call get recjected promise.all() throws an error
//if all the promises get success it give result and if anyonn of the promise get faied or reject then complete
//  promise.all() get failed. It will not wait for other prmises to get completed or failed.\


// code:

// Promise.all(promise)
// .then(res => console.log(res))
// .catch(err => console.error(err))



// 2.) Promise.allsetteled(): if anyone one of the promise fail or throws an error then this promise.allsettled()
// call wait for other calls to be setteled and then returns the result with succusefull as well as failed result.
// code:

// Promise.allSettled(promise)
// .then(res => console.log(res))
// .catch(err => console.error(err))

//3). Promise.race(): this api call will return the result of 1st promise who will settled first weather it fails or get succsess,
// if it get fail then api call will throw an error, it will not wait for all promises to be settled.

//code:
// Promise.race(promise)
// .then(res => console.log(res))
// .catch(err => console.error(err))





//4.) Promise.any(): this is same as promise.race() but it will return the result of 1st success promise.if first
//prmoise get failed then this call ignore that and jump onto other promise and return it if that promise get success.
// And if all the promises get failed then it will throw aggregate error.

//code:
Promise.any(promise)
.then(res => console.log(res))
.catch(err => console.error(err))

