// ye dekh ek function ke andr dusra function 
function one(a){
    return function (b){
        return function (c){
            return a*b*c;
        }
    }
}

console.log(one(2)(3)(4));