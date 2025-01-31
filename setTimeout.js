// Method-1---->
function print(){
    console.log("Bich wlaa console");
}
console.log("Start");
setTimeout(print,2000);
console.log("End");

// Method-2---->
console.log("Start");
setTimeout(()=>{
    console.log("Bich wlaa console 2");
},2000);
console.log("End");