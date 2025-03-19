// Async Funcrtion: it is the fucntion that only returns a promise and if we return a normal data type then 
// it will wrap that data into  a promise and return that promise
// async function getData() {
//     return "ali";
// }
// const dataPromise = getData();
// dataPromise.then((data) => {
//     console.log(data)
// });



//Asyncawait: Async and await are uesd to handle promises
// await : it is the keyword that is only be used in a async function.  
const p = new Promise((resolve, reject)=>{
    setTimeout(function (){
        resolve("Promise is resolved");
    }, 10000)
});

// async function handlePromise(){
//     const data = await p;
//     console.log(data);
// }
// handlePromise();
// This is how we can resolve a promise useing asyncwait. 









// normal way of handleing resolution of a promise
// In this way JS engine not wait  for the promise to be resolved that is why we need asyncawait where JS engine
// will wait for the promise to be resolved.
// function getdata(){
//     p.then((res)=> console.log(res));
//     console.log("nameste")
// }
// getdata(); 


// handling promise using asyncawait
// using asyncwait JS engine's call stack suspend the execution of the function and keep it suspended util promise get resolved
// and during the time of suspentione everything will work normally if any other function arrive in call stack
//it will execute immediatly. 
async function handle(){
    console.log("before resolution")
    const data = await p;// js engine will suspend the execution of handle() function at this line and execute other function
    // which are still not executed and willing to come in the call stack. it is all because of await keyword.
    console.log(data);
    console.log("ali")
    
}
function nam1e(){
    console.log("mehdi")
}
handle();
nam1e();




