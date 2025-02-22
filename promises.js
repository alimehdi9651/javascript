// promise : Promises is an the Object representing the eventual completion or failer of an asyncrons operation.
const promise = createOrder(cart);
promise.then(function(orderId){
    proceedTopayment(orderId);
});