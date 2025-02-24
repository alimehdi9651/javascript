
// promise : Promises is an the Object representing the eventual completion or failer of an asyncrons operation.
// through promises we get solution for the inversion of control
// const promise = createOrder(cart);
// promise.then(function(orderId){
//     proceedTopayment(orderId);
// });

// promises chain: attaching multiple promises to the code
// createOrder(cart)
//     .then(function (orderId){
//         return proceedTopayment(orderId);
//     });
//     .then(function(paymentInfo){
//         return showorersummary(paymentInfo);
//     });
//     .then(function(paymentInfo){
//         return updatewalletBalance(paymentInfo)
//     });


// creation of own promises{
// https://www.youtube.com/watch?v=U74BJcr8NeQ&list=PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID&index=23
// }
const cart = ["top", "jeans", "bottom"];
createOrder(cart)
.then(function(orderId) {
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedTopayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo); 
})
.then(function(summary){
    console.log(summary);
    return updateWallet(summary);
})
.then(function(walletInfo){
    console.log(walletInfo)
})
.catch(function (err) {
    console.log(err.message);
})


function updateWallet(summary){
    return new Promise(function(resolve, reject){
        resolve("Wllate updated successfully");
    })
}
function showOrderSummary(paymentInfo){
    return new Promise(function (resolve, reject){
        resolve("this is the summary of your above order");
    });

}
function createOrder(cart){
    const pr = new Promise (function (resolve, reject){
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            resolve(orderId);
        }
    });
    return pr;
}
function proceedTopayment(orderId){
    const pr = new Promise(function(resolve, reject){
        if(orderId){
        resolve("Payment done successfully of order number "+orderId);
        }else{
            const err = new Error("Above payment was not done successfully")
            reject(err);
        }
    });
    return pr;
}
function validateCart(cart){
    return true;
}