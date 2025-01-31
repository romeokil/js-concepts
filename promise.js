// promise tell us the (eventual) completion or failure of an asynchronous operation setTimeout,
// db calls,koi bhi file operation


// ye promse1 hmlog dekhe ki bhai resolve kb call krna hai.


// let promise1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("this is Inside setTimout function!!");
//         // jo opertion ho gy uske baad likhte hai hmlog console print krwa liye then phir resolve kr diye
//         resolve();
//     },1000);
// })
// promise1.then(()=>{
//     console.log("Promise resolved ji!")
// })


// ye promise 2 me hmlog dekhe ki data resolve or reject ke through wo .then or .catch me 
// kaise access kr skte hai.

let promsie2=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Printing promise2 ");
        resolve({username:"Rahul",email:"rahulkumarjha@gmail.com"});
    },2000);
})
.then((user)=>{
    return user.username;
})
.then(username=>console.log(username));

// promise 3 me dekhte hai ki kaise async await syntax me access kr skte hai. 
// esme dekho ek promise return kr rha tha toh hm alag se ek function diye hehe and phir usko call kr diye.
let response;
async function main(){
    return promise3=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Inside promsie3 function");
            resolve({name:"rahul",email:"akul@gmail.com"})
        },2000)
    })
}

async function hehe(){
    let result=await main();
    console.log(result);
}
hehe();












