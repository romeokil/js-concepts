// closure basically kuch ni hai bolta hai ki function along with their scope qki dekho bascially hmlog
// bahar a ko print kra rhe hai toh aakhir kaise yaad hai usko qki wo refernce store kiya us variable ka
// jo ki uske lexical scope me hai.
function outer(){
    let a=10;
    return function inner(){
        return a;
    }
}
let z=outer();
console.log(z());